const vscode = require('vscode');

const Push = require('./Push');
const utils = require('./lib/utils');

/**
 * Provides a normalised interface for the command panel and contextual menus.
 */
class UI extends Push {
	clearUploadQueue() {
		if (super.clearQueue(Push.queueDefs.upload)) {
			utils.showLocalisedMessage('upload_queue_cleared');
		}
	}

	/**
	 * Show the current upload queue in the console
	 */
	showUploadQueue() {
		this.listQueueItems(Push.queueDefs.upload);
	}

	removeUploadQueuedItem(context) {
		let uri;

		if (context instanceof vscode.TreeItem) {
			uri = context.resourceUri;
		} else {
			uri = this.paths.getFileSrc(context);
		}

		super.removeQueuedUri(Push.queueDefs.upload, uri);
	}

	queueGitChangedFiles() {
		let uri;

		if ((uri = this.getValidUri(uri))) {
			return super.queueGitChangedFiles(uri).catch(this.catchError);
		}
	}

	uploadGitChangedFiles() {
		let uri;

		if ((uri = this.getValidUri(uri))) {
			return super.queueGitChangedFiles(uri, true).catch(this.catchError);
		}
	}

	queueGitCommit() {
		let uri;

		if ((uri = this.getValidUri(uri))) {
			return this.queueGitCommitChanges(uri).catch(this.catchError);
		}
	}

	uploadGitCommit() {
		let uri;

		if ((uri = this.getValidUri(uri))) {
			return this.queueGitCommitChanges(uri, true).catch(this.catchError);
		}
	}

	/**
	 * Uploads a single file or directory by its Uri.
	 * @param {Uri} uri
	 * @param {Uri} selectlist
	 */
	upload(uri, selectList) {
		// According to https://code.visualstudio.com/updates/v1_6, a second parameter if provided, now contains a list of selected items.
		// The active item still appears as the first item in the list. 
		// Just to be safe, if there is no selectList, or there is only one uri, previous behavior preserved in the else block.
		// It will also only add files to the list, will not add directories. No great reason other than I don't know the implications.
		// Original author may be able to eliminate duplicate handling.
		if (selectList != null && selectList.length > 1) {
			let fileList = [];
			for (var i = 0; i < selectList.length; i++) {
				let uri = selectList[i];
				if (uri && uri instanceof vscode.Uri) {
					if (!this.paths.isDirectory(uri)) {
						fileList.push(uri);
					}
				}
			} // end for
		  if (fileList.length > 0) {
			return this.transfer(fileList, 'put');
		  } else return Promise.reject();
		} else {

		if (!(uri = this.getValidUri(uri))) {
			return Promise.reject();
		}

		if (this.paths.isDirectory(uri)) {
			return this.ensureSingleService(uri)
				.then(() => this.transferDirectory(uri, 'put'))
				.catch (this.catchError);
		}

		return this.transfer(uri, 'put').catch(this.catchError);
		}
	}

	
	/**
	 * Downloads a single file or directory by its Uri.
	 * @param {Uri} uri
	 */
	download(uri) {
		if (!(uri = this.getValidUri(uri))) {
			return Promise.reject();
		}

		if (this.paths.isDirectory(uri)) {
			return this.ensureSingleService(uri)
				.then(() => this.transferDirectory(uri, 'get'))
				.catch(this.catchError);
		}

		return this.transfer(uri, 'get').catch(this.catchError);
	}

	/**
	 * @description
	 * Discover differences between the local and remote file. Uses the contextual
	 * service to retrieve the remote URI and vscode to diff the files.
	 * @param {Uri} uri
	 */
	diff(uri) {
		if ((uri = this.getValidUri(uri))) {
			return this.diffRemote(uri).catch(this.catchError);
		}
	}

	/**
	 * @description
	 * Watches the files within the supplied Uri path and uploads them whenever
	 * a change is detected
	 * @param {Uri} uri - Folder/File Uri to watch.
	 */
	addWatch(uri) {
		if (!(uri = this.getValidUri(uri))) {
			return false;
		}

		return this.watch.add(uri).catch(this.catchError);
	}

	/**
	 * Removes an existing watch from a Uri.
	 * @param {Uri|TreeItem} uri - Folder/File Uri or TreeItem to stop watching.
	 */
	removeWatch(context) {
		let uri;

		if (context instanceof vscode.TreeItem) {
			context = context.resourceUri;
		}

		if ((uri = this.paths.getFileSrc(context))) {
			this.watch.remove(uri).catch(this.catchError);
		}
	}

	/**
	 * Lists active watchers
	 */
	listWatchers() {
		this.watch.list();
	}

	/**
	 * Starts the internal watch process and watches the blobs.
	 */
	startWatch() {
		this.watch.toggle(true);
	}

	/**
	 * Stops the internal watch process.
	 */
	stopWatch() {
		this.watch.toggle(false);
	}

	/**
	 * Clear all (active or disabled) watchers
	 */
	clearWatchers() {
		this.watch.clear();
	}

	/**
	 * Purges all stored watchers within the contextual storage
	 */
	purgeStoredWatchers() {
		this.watch.purge();
	}

	cancelQueues() {
		this.stopCancellableQueues();
	}

	stopQueues() {
		this.stopCancellableQueues(true);
	}

	/**
	 * @see Service#createServiceConfig
	 */
	createServiceConfig(uri) {
		if ((uri = this.getValidUri(uri))) {
			return this.service.settings.editServiceConfig(uri, true).catch(this.catchError);
		} else {
			utils.showLocalisedWarning('no_servicefile_context');
		}
	}

	/**
	 * @see Service#editServiceConfig
	 */
	editServiceConfig(uri) {
		if ((uri = this.getValidUri(uri))) {
			return this.service.settings.editServiceConfig(uri).catch(this.catchError);
		} else {
			utils.showLocalisedWarning('no_servicefile_context');
		}
	}

	/**
	 * @description
	 * Sets the current service file environment, then disables any active watchers,
	 * depending on the user's preference.
	 * @see Service#setConfigEnv
	 */
	setServiceEnv(uri) {
		if ((uri = this.getValidUri(uri))) {
			return this.service.setConfigEnv(uri).catch(this.catchError)
				.then(() => {
					if (this.config.disableWatchOnEnvChange) {
						this.stopWatch();
					}
				});
		} else {
			utils.showLocalisedWarning('no_servicefile_context');
		}
	}

	/**
	 * @see Service#importConfig
	 */
	importConfig(uri) {
		if (this.getValidUri(uri)) {
			return this.service.settings.importConfig(uri).catch(this.catchError);
		}
	}
}

module.exports = UI;
