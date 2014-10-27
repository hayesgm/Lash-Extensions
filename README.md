# Lash Extensions

Lash is a web browser for iOS which allows community-sourced extensions.  Lash extensions work like normal browser extensions, you can execute scripts on specific domains (e.g. for AdBlock), add panel buttons on the toolbar to let a user run your extension on the page or in a panel pop-up.  Lash keeps the browser experience light and let's the extensions run the show.

## Community Sourced

Lash extensions are written by the community and hosted (for now) in this GitHub repo.  To write an extension, fork this repo and add your extension in its own folder.  When you're ready to test, point your Lash browser to your fork and ensure the extension works.  Finally, you can add a pull request and we'll pull your extension so you can share it with everyone.

# How to write a Lash Extension

Lash extensions are kept as sub-folders to this repo.  They consist of a `manifest.json` which describes the extension and the scripts & assets it uses.  There are three main types of Lash functions:

## Page Scripts

Page scripts run on the actual web pages when a user visits a qualifying domain.  E.g. if you're writing a reader extension for Reddit, you would add a page script for reddit.com.  This script would add CSS to the page and any other interactions you'd like to enhance.  These scripts can communciate with your extension via `notifications`.

## Panel Scripts

Panel scripts are just like page scripts, except they only run when a user clicks the extensions icon on the toolbar.  Panel scripts run in the active page, but at a time when a user expects interaction.  A panel script could, for instance, run as a password manager and log the user in to certain websites.  If you're deciding between a page script and a panel script, remember that panel scripts can have a better user interaction since the user is expecting to interact with your extension.  Additionally, you won't slow each page load with interpreting your extension.

## Panels

The panel body HTML page is a full HTML page that appears in a popup when the user selects your icon from the toolbar.  This will be full-screen for iOS apps and a panel for iPads.  Panel scripts give you an easy way to interact directly with the user.  You may, for instance, allow the user to change settings or log in to your app.  You'll have access to local storage or you can push the data to your back-end servers.

# Lash File Structure

When you write Lash extensions, you'll add a sub-folder to this repository.  The core file will be manifest.json, but you should use the following folder structure:

```sh
MyExtension
  - manifest.json
  - .. assets ..
```

## Manifest.json

You store all metadata about your extension in `metadata.json`.  This is a JSON file which should include some of the following keys based on what you want to do with your extension:

 * `id` - A globally unique ID for your extension (e.g. `com.example.MyApp`)
 * `version` - The current version of your extension
 * `name` - A display name for your extension
 * `desc` - A short descrition of your extension
 * `panelScriptFile` - A JavaScript asset file containing the code of your `Panel Script`
 * `panelIcon` - A Font-Awesome icon to display in the toolbar
 * `panelBodyFile` - An HTML asset file with the body of your `Panel`
 * `pageScriptFile` - A JavaScript file containing the code of your `Page Script`
 * `pageScriptDomain` - A list of domains on which to run your Page Script

Note: When you build your lash extension, `pageScriptFile` will be read, closed, and minified into the `pageScript` key.  The same applies to `pageScriptDomain` and (without minification) `panelBody`.  You can, if you wish, write this directly into `manifest.json`, but this is not recommended.

# Lash JavaScript APIs

Lash exposes several JavaScript APIs, depicted below:

## Notifications

TODO

# Collaborating

1) Fork this project
2) Add your Lash Extension in a new sub-folder
3) Make sure to use a unique `id`
4) Add your extension's folder name to `build.json`
5) Test your extension by setting Lash's "Extension source" to `https://rawgit.com/<your repo>/Lash-Extensions/master/BaseExtensions.json`
6) Submit a pull request (note `License` below)

# License

Lash Extensions is licensed under the Apache 2.0 license.  By submitting a pull request to this repo, you assert that you own full copyright of the submission and that you agree to release the extension under the same Apache 2.0 license.