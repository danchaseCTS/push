const path = require('path');
const fs = require('fs');

const Paths = require('../lib/Paths');

class ServiceSettings {
	constructor() {
		this.settingsCache = {};
		this.paths = new Paths();
	}

	/**
	 * @description
	 * Attempts to retrieve a server settings JSON file from the supplied URI,
	 * eventually ascending the directory tree to the root of the project.
	 * @param {object} uri - URI of the path in which to start looking
	 */
	getServerJSON(uri, settingsFilename) {
		const file = this.paths.findFileInAncestors(
			settingsFilename,
			path.dirname(uri.path)
		);

		let fileContents, newFile;

		if (file !== '' && fs.existsSync(file)) {
			// File isn't empty and exists - read and set into cache
			fileContents = (fs.readFileSync(file, "UTF-8")).toString().trim();

			if (fileContents !== '') {
				try {
					newFile = (
						!this.settingsCache ||
						fileContents !== this.settingsCache
					);

					this.settingsCache = fileContents;

					return {
						file,
						data: JSON.parse(fileContents),
						newFile
					};
				} catch(e) {
					return null;
				}
			}
		}
	}
}

module.exports = ServiceSettings;