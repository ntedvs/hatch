(function () {
  var params = new URL(document.currentScript.src).searchParams;
  var date = params.get("date");
  if (!date) return;
  var percentage = parseFloat(params.get("percentage")) || 1;

  function apply() {
    var days = Math.floor((new Date() - new Date(date)) / 86400000);
    if (days <= 0) return;
    document.body.style.opacity = Math.max(0, (100 - days * percentage)) / 100;
  }

  if (document.body) apply();
  else document.addEventListener("DOMContentLoaded", apply);
})();
