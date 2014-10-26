# Lash Extensions


# How to write a Lash Extension


## Folder Structure

Lash Extensions have a simple folder structure:

```sh
MyExtension
  - manifest.json
  - .. assets ..
```

## Manifest.json

You store all metadata about your extension in `metadata.json`.  This is a JSON file which should include the following keys.

 * `id` - A globally unique ID for your extension (e.g. `com.example.MyApp`)
 * `version` - The current version of your extension
 * `name` - A display name for your extension
 * `desc` - A short descrition of your extension
 * `panelScriptFile` - A JavaScript file containing the code of your Panel Extension (see `Panel Extensions`)
 * `panelIcon` - A Font-Awesome icon to display in the toolbar
 * `pageScriptFile` - A JavaScript file containing the code of your Page Script (see `Page Scripts`)
 * `pageScriptDomain` - A list of domains on which to run your Page Script


# Panel Scripts

# Page Scripts

# Collaborating

To add a new extension, fork this project.  Follow the steps from the "How to write a Lash Extension" section above.  To test your extension, point your Lash settings to use your LashExtensions.json for your fork.  Once you've verified your extension works properly, submit your change as a pull request.  We'll review and test the extension before accepting it.