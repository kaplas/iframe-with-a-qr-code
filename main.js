var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("c");
console.log(c);

function show(el) {
  el.style.display = 'block';
}

function hide(el) {
  el.style.display = 'none';
}

function showOrHideUnneeded(title1, url1, title2, url2) {

}

function inputChanged() {
  console.log("something changed");

}

document.addEventListener('DOMContentLoaded', function() {
  show(document.querySelector(".settings"));  

  const inputs = this.querySelectorAll('input');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", inputChanged);
    inputs[i].addEventListener("paste", inputChanged);
    inputs[i].addEventListener("keyup", inputChanged);
  }
}, false);