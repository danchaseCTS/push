module.exports = {
	'comm_push_settings1': 'Push settings file - first generated on ${1}\n',
	'comm_push_settings2': 'Note: Optional items are commented out and can be uncommented if you wish to set them\n',
	'comm_add_service_config': 'Add service configuration here...',
	'comm_settings_imported': 'Settings imported from ${1}\n',
	'no_locale': 'Locale "${1}" does not exist. Has a .js file been created for it?',
	'upload_queue_disabled': 'Upload queue is disabled. Please check workspace your current settings for njpPush.uploadQueue.',
	'upload_queue_cleared': 'Upload queue cleared',
	'select_workspace_root': 'Select a workspace root path:',
	'running_tasks_in_queue': 'Running ${1} p{1:task:tasks} in queue...',
	'processing': 'Processing (${1}/${2})',
	'processing_with_state': 'Processing ${1} (${2}/${3})',
	'queue_empty': 'Queue is empty.',
	'queue_running': 'Queue is running.',
	'stopping_queue': 'Stopping queue...',
	'queue_complete': 'Queue complete.',
	'queue_items_fail': '${1} p{1:item:items} failed.',
	'queue_items_skip': '${1} p{1:item:items} skipped.',
	'queue_items_success': '${1} p{1:item:items} ${2}.',
	'cancel': 'Cancel',
	'enter_service_settings_filename': 'Enter a filename for the service settings file:',
	'empty': 'Empty',
	'empty_template': 'Empty template',
	'select_service_type_template': 'Select a service type template.',
	'filename_exists': 'The file "${1}" already exists and appears to be newer.',
	'filename_exists_ignore_times': 'The file "${1}" already exists.',
	'filename_exists_mismatch': 'The file "${1}" already exists and is of a different type.',
	'skip': 'Skip',
	'stop': 'Stop',
	'skip_uploading_default': 'Skip uploading the file (default)',
	'stop_transfer_empty_queue': 'Stop transfer and empty current queue',
	'overwrite': 'Overwrite',
	'replace_target_with_source': 'Replace the target file with the source file',
	'rename': 'Rename',
	'keep_both_files_by_rename': 'Keep both files by renaming the source file',
	'skip_all': 'Skip all',
	'skip_uploading_all_existing': 'Skip uploading all existing files',
	'overwrite_all': 'Overwrite all',
	'replace_all_existing': 'Replace all existing files',
	'rename_all': 'Rename all',
	'keep_all_existing_by_renaming_uploaded': 'Keep all existing files by renaming the uploaded files',
	'transfer_cancelled': 'Transfer cancelled',
	'no_service_file': 'A settings file could not be found within your project. Have you created a file matching "${1}" yet?',
	'service_not_defined': 'A transfer service was not defined within the settings file at "${1}".',
	'service_defined_but_no_config_exists': 'A transfer service was defined but no configuration could be found within the file at "${1}".',
	'active_service_not_found': 'The active service "${1}" could not be found within the settings file at "${2}"',
	'no_service_env': 'The service file at "${1}" isn’t configured for environments. Please see the README on configuring services for multiple environments.',
	'single_env': 'The service file at "${1}" only contains one environment (${2}). It cannot be switched.',
	'multiple_service_files_no_transfer': 'More than one service settings file was found within the selected directory. The transfer could not be completed.',
	'service_name_invalid': 'The service name "${1}" within settings file "${2}" does not Exist. Please choose a valid service name.',
	'service_setting_missing': 'The service file at "${1}" for the "${2}" environment is missing the required ${3} option: "${4}". Push cannot continue without this setting.',
	'cannot_action_ignored_file': 'Cannot ${1} file "${2}" - It matches one of the defined ignoreGlobs filters.',
	'no_import_file': 'Config file not specified. Please either run this command from within a configuration file or from the explorer context menu.',
	'import_file_not_supported': 'Configuration file format is not supported. Currently, only the Sublime SFTP format is supported.',
	'settings_file_exists': 'A settings file already exists in this location. Do you want to overwrite it?',
	'requesting_password': 'Requesting password... (note, passwords can be saved in the service settings file to avoid this prompt).',
	'added_watch_for': 'Added watch for ${1}',
	'removed_watch_for': 'Removed watch for ${1}',
	'cleared_all_watchers': 'Cleared all watchers.',
	'purged_all_watchers': 'Purged all watchers from storage.',
	'watched_paths': 'Watched paths:',
	'path_with_trigger_count': '${1} (fired ${2} p{2:time:times})',
	'no_paths_watched': 'No paths watched.',
	'directory_out_of_root_no_create': 'The directory "${1}" is not within the root path and cannot be created.',
	'directory_not_created_remote_mismatch': 'Directory "${1}" could not be created (a file with the same name exists on the remote!)',
	'file_class_description': 'Local/network file transfers',
	'file_not_found': 'The file "${1}" could not be found.',
	'remote_file_not_found': 'Remote file "${1}" could not be found.',
	'sftp_class_description': 'SFTP/SSH File transfers',
	'sftp_could_not_connect_server': 'Could not connect to server host ${1}:${2}',
	'sftp_client_connected': 'SFTP client connected to host ${1}:${2}',
	'sftp_client_connected_gateway': 'SFTP client connected to host ${1}:${2} via gateway ${3}:${4}',
	'service_missing_root': 'Push could not find or access the root path. Please check the "${1}" settings file.',
	'sftp_disconnected': 'SFTP client disconnected from host ${1}:${2}',
	'sftp_enter_ssh_pass': 'Enter SSH password (will not be saved)',
	'stopping': 'Stopping...',
	'queue_force_stopped': 'Queue ${1} task force stopped after ${2} p{2:second:seconds}.',
	'queue_cancelled': 'Queue ${1} cancelled',
	'num_to_upload': '${1} p{1:item:items} to upload',
	'items_queued_for_upload': 'Items queued for upload:',
	'no_current_upload_queue': 'No current upload queue items',
	'key_file_not_found': 'The private key file "${1}" could not be found. Does it exist in this location? Remember — shell path shortcuts like "~" cannot be used.',
	'key_file_not_working': 'The private key file at "${1}" did not authenticate the user ${2}. Are you sure this is the correct key file and it has been given access?',
	'not_a_git_repo': 'The current working directory "${1}" does not contain a Git repository.',
	'stream_read': 'Stream IO read error for file "${1}". Error: ${2}',
	'stream_write': 'Stream IO write error for file "${1}". Error: ${2}',
	'cannot_list_directory': 'Directory "${1}" cannot be listed: ${2}',
	'could_not_load_gateway_key': 'Could not load a private key file on the gateway at "${1}". Server error was: ${2}`',
	'error_from_gateway': 'Error occured on SSH gateway: "${1}"',
	'invalid_uri_scheme': 'Sorry, the filesystem scheme "${1}" is not supported. Push cannot work on files of this type.',
	'invalid_path': 'The path "${1}" does not appear to be valid and has been skipped.',
	'no_servicefile_context': 'A folder/path context for creating a service file could not be found. Please either open a workspace or select "Create/edit Push configuration" from a folder or open file.',
	'env_tooltip': 'The "${1}" environment is active for the currently open file.',
	'select_env': 'Select an environment to activate',
	'error_writing_json': 'There was an error writing to the service JSON file. Error: "${1}".',
	'no_error': 'No error message.',
	'dir_read_error': 'The directory "${1}" could not be read.',
	'dir_read_error_with_error': 'The directory "${1}" could not be read. The full error was: "${2}".'
};
