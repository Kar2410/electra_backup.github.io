
    function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}
console.log("bhhah");



document.addEventListener("DOMContentLoaded", function () {
  let toggle = document.querySelector("fieldset.toggle");
  toggle.classList.toggle("hidden");
});

