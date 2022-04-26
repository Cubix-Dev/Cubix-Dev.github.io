function myFunction() {
  var copyText = document.getElementById("SNC-Link");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied Text";
}

function myFunction() {
  var copyText = document.getElementById("Kiwi-Link");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied Text";
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}