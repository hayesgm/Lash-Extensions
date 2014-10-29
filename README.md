# Lash Extensions

Lash is a web browser for iOS which allows community-sourced extensions.  Lash extensions work like normal browser extensions, you can set scripts on visited pages (like an AdBlock), add toolbar buttons to let a user run your extension on demand or in a pop-up.  Lash keeps the browser experience light and let's extensions run the show.

## Community Sourced

Lash extensions are written by the community and hosted in this GitHub repo.  You can get started writing Lash extensions in seconds.  Just fork this repo and add your extension in its own sub-folder.  When you're ready to test, point the Lash browser to your fork and see your extension live.  When you're done, submit a pull request, and we'll help share your extension with everyone.

# How to write a Lash Extension

Lash extensions are kept as sub-folders to this repo.  They consist of a manifest file and other asset files.  `manifest.json` describes the extension, scripts to run and associated assets (HTML, JS or images).

Lash extensions can utilize any of the following core functionalities.

## Page Scripts

Page scripts run on the web pages when a user visits a qualifying URL.  URLs can be filitered by domain or left as a wildcard.  This, if you're writing a Reader extension for Reddit, you would add a page script for reddit.com.  Alternatively, if you're listing Third Party Tracking Cookies, you would have the script run on a wildcard domain.  Your scripts are run a closure, but otherwise you're open to add any functionality you need.  You can, for instance, add CSS to the page, or override JavaScript events to enhance the user experience.  Your page script can communciate with your extension via `notifications`.  As page scripts may run on a large number of pages, they should be kept as light as possible (e.g. no JQuery injection).

## Panel Scripts

Panel scripts are just like page scripts, except they only run when a user clicks your extension icon in the toolbar.  Panel scripts always run on the active page.  A panel script may, for instance, act as a password manager and log the user in to a specific website when clicked.

If you're deciding between a page script and a panel script, remember that panel scripts are better for user interaction as the user is expecting to interact with your extension.  Page scripts should be generally passive and communicate to the user through `notifications`.

## Panels

Panels give you an easy way to interact directly with the user.  Panels pop up when a user selects your extension icon from the toolbar.  They are a fully interactive HTML page which you specific.  These pages are the best place to interact with a user (e.g. to allow a user to login to your extension or change settings).  You specify the complete panel HTML in `panelBody` or `panelBodyFile`.  Note: panels are full screen for iOS apps, but only a popup panel on iPads.  They may be created or destroyed frequently, so data should be stored in local storage or remotely.

# Lash File Structure

When you write Lash extensions, you'll add a sub-folder to this repository.  The core file will be `manifest.json`, but you should use the following folder structure:

```sh
MyExtension
  - manifest.json
  - .. your assets ..
```

## Manifest.json

You store all meta-data about your extension in `manifest.json`.  `manifest.json` is a JSON-encoded text file which includes some of the following keys, based on which functionalities your extension needs:

 * `id` - A globally unique ID for your extension (e.g. `com.example.MyApp`) - required
 * `version` - The current version of your extension - required
 * `name` - A display name for your extension - required
 * `desc` - A short descrition of your extension - required
 * `panelScriptFile` - A JavaScript asset file containing the code of your `Panel Script`
 * `panelIcon` - A Font-Awesome icon to display in the toolbar
 * `panelBodyFile` - An HTML asset file with the body of your `Panel`
 * `pageScriptFile` - A JavaScript file containing the code of your `Page Script`
 * `pageScriptDomain` - A list of domains on which to run your Page Script

Note: When your `manifest.json` is cross-compiled into `BaseExtensions.json`, keys such as `pageScriptFile` are read from your extensions' assets.  The file is read, minified and inserted into the `pageScript` key.  This same applies to `panelScriptFile` and (without the minification) `panelBodyFile`.  You can, if you wish, write your code directly into `pageScript`, `panelScript`, or `panelBody`, but this is not recommended.

# Lash JavaScript APIs

Lash exposes several JavaScript APIs which allow your extension to communicate with Lash and your panels.  It's worth noting that these APIs are not secured and thus a malicious page or other extension could call any of these JavaScript APIs.  You must be careful and validate code or messages on the receiving end.

## Notifications

Notifications allow your page script to communicate with other parts of your extension.  Say you're writing an page script which let's a user know which third-party cookies exist on this site.  You could send a notification with an array of the names of the cookies.

myPageScript.js
```javascript
Lash.notify('networks', ['Some Ad Network', 'Some Other Ad Network']);
```

These notifications will be held in a buffer until a user clicks into your extension's panel.  Once the panel is loaded, your panel script will receive notifications by subscribing to notifications for your extension:

myPanel.html
```html
<div>You are being tracked by <span id="trackers">(loading)</span>.</div>

<script type="application/javascript">
  Lash.receive(function(event, payload) {
    if (event == 'networks') {
      document.findElementById('trackers').innerText = payload.join(', ');
    }
  });
</script>
```

## Badges

If you have a panel icon, you may wish to display a badge or gem next to the icon to notify the user your extension has done something (e.g. has blocked 5 ads on this page).  You can set the badge icon text using the following code in a page script:

```javascript
Lash.setBadgeIcon("2");
```

# Collaborating

1. Fork this project
2. Add your Lash Extension in a new sub-folder
3. Make sure to use a unique `id`
4. Add your extension's folder name to `build.json`
5. Test your extension by setting Lash's "Extension source" to `https://rawgit.com/<your repo>/Lash-Extensions/master/BaseExtensions.json`
6. Submit a pull request (note `License` below)

# Future

* Consider moving extensions away from a single-repo.  Need to balance this against quality-checking extensions.
# License

Lash Extensions is licensed under the Apache 2.0 license.  By submitting a pull request to this repo, you assert that you own full copyright of the submission and that you agree to release the extension under the same Apache 2.0 license.