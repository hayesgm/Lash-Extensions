
/* This is going to start by simply injecting some CSS into the page
 * This should, at the least, be based on the domain */
var css = window.document.createElement("style")

// Rick James
css.innerHTML = 
  "td { font-size: 12pt !important; }" +
  "center > table { width: 100% !important; table-layout:fixed; }" +
  "table > tr { }" +
  "table > tbody > tr:nth-of-type(1) table { width: 100% !important; table-layout:fixed; }" +
  "table > tbody > tr:nth-of-type(2) { display: none; }" +
  "table > tbody > tr:nth-of-type(3) table { width: 100% !important; table-layout:fixed; }" +
  "" +
  "/* Header Items */" +
  ".pagetop { float: left; margin-left: 6px;  }" +
  ".pagetop img { display: none; }" +
  "" +
  "/* Core Item Row */" +
  "table > tbody > tr:nth-of-type(3) table tr:nth-child(3n+1) { width: 100%; height: 45px; border-bottom: solid 1px; }" +
  "" +
  "/* Item Number */" +
  "table > tbody > tr:nth-of-type(3) table tr:nth-child(3n+1) td:nth-child(1) { width: 17px !important; vertical-align: top !important; padding-left: 5px; padding-top: 5px }" +
  "" +
  "/* Up/down */" +
  "table > tbody > tr:nth-of-type(3) table tr:nth-child(3n+1) td:nth-child(2) { position: relative; left: -17px; top: 18px; !important; width: 10px }" +
  "" +
  "/* Title and Site */" +
  "table > tbody > tr:nth-of-type(3) table tr:nth-child(3n+1) td:nth-child(3) { vertical-align: top !important; padding-top: 5px }" +
  "table > tbody > tr:nth-of-type(3) table tr:nth-child(3n+1) td:nth-child(3) a { color: #112; position: relative; }" +
  "/* Make a bigger clickable area */" +
  "table table tr:nth-child(3n+1) td:nth-child(3) a:after{ content:''; padding: 15px 100% 30px 10%; position: absolute; left: -25px; top: -5px; }" +
  "" +
  "/* Points Row */" +
  "table > tbody > tr:nth-of-type(3) table tr:nth-child(3n+2) td:nth-child(2) { color: #555 !important; border-bottom: thin dotted #ccc; padding-top: 4px; padding-bottom: 5px }" +
  "" +
  "/* Blank row */" +
  "table > tbody > tr:nth-of-type(3) table tr:nth-child(3n+3) { display: none; }" +
  "" +
  "/* Arrows */" +
  ".votearrow { width: 15px !important; height: 15px !important; background-size: 15px !important; }"

// Set width to exactly what the window width is
window.document.body.style.width = window.innerWidth

window.document.body.appendChild(css);