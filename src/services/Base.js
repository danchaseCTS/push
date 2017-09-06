const vscode = require('vscode');

class ServiceBase {
	constructor(config) {
		this.diff = false;
		this.settings = false;
		this.type = '';
		this.config = config;
	}

	validateServiceSettings(spec, settings) {
		let key;

		for (key in spec) {
			if (spec.hasOwnProperty(key)) {
				if (!settings[key]) {
					vscode.window.showErrorMessage(
						`Server setting file for type ${this.type} missing required setting: "${key}".` +
						` Please resolve before continuing.`
					);
					return false;
				}
			}
		}

		return true;
	}

	/**
	 * Base service file upload method.
	 * @param {string} src - File source path
	 * @param {string} dest - File destination path
	 */
	put() {
		throw new Error('Service #put method is not yet defined.');
	}

	/**
	 * Base service file download method.
	 * @param {string} src - File source path
	 * @param {string} dest - File destination path
	 */
	get() {
		throw new Error('Service #get method is not yet defined.');
	}
};

module.exports = ServiceBase;