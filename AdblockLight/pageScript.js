
Lash.notify("blocked", ["page 1","page 2"]);

/* This is going to start by simply injecting some CSS into the page
 * This should, at the least, be based on the domain */
var css = window.document.createElement("style")

// Rick James
// This is obviously a ridiculous style sheet and we'll need to shore it up
css.innerHTML = "body { opacity: 0.8 !important }";

window.document.body.appendChild(css);

/* Add Content Security Policy */
var metaCSP = window.document.createElement("meta");

// This is obviously a ridiculous policy, and we'll need to shore it up
metaCSP.setAttribute("http-equiv", "Content-Security-Policy");
metaCSP.setAttribute("content", "script-src 'self' https://apis.google.com");

// Add policy
window.document.getElementsByTagName('head')[0].appendChild(metaCSP);
