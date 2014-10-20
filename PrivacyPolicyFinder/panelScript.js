
var iter = document.evaluate('//html//a[contains(translate(text(),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz"),"privacy")]', document);

var link = iter.iterateNext();

if (link) {
  window.location = link.href;
} else {
  window.alert('No privacy policy located');
}