let boxWidthInput = document.getElementById("boxWidth");
let boxHeightInput = document.getElementById("boxHeight");
let Lradius = document.getElementById("Lradius");
let Tradius = document.getElementById("Tradius");
let Dradius = document.getElementById("Dradius");
let Bradius = document.getElementById("Bradius");
let previewBox = document.getElementById("preview");
let cssOutput = document.getElementById("cssOutput");

let ranges = [Lradius, Tradius, Dradius, Bradius];

for (let index = 0; index < ranges.length; index++) {
  ranges[index].addEventListener("change", function() {
    adjustRadius(ranges[index], previewBox, ranges[index].dataset.border);
  });
}

boxWidthInput.addEventListener("change", function() {
  previewBox.style.width = boxWidthInput.value + "px";
});

boxHeightInput.addEventListener("change", function() {
  previewBox.style.height = boxHeightInput.value + "px";
});

function adjustRadius(input, target, border) {
  switch (border) {
    case "left":
      target.style.borderTopLeftRadius = input.value + "px";
      break;
    case "top":
      target.style.borderTopRightRadius = input.value + "px";
      break;
    case "right":
      target.style.borderBottomRightRadius = input.value + "px";
      break;
    case "bottom":
      target.style.borderBottomLeftRadius = input.value + "px";
      break;
    default:
      break;
  }
  cssOutput.innerHTML =
    "border-top-left-radius: " +
    target.style.borderTopLeftRadius +
    "</br>" +
    "border-top-right-radius: " +
    target.style.borderTopRightRadius +
    "</br>" +
    "border-bottom-left-radius: " +
    target.style.borderBottomLeftRadius +
    "</br>" +
    "border-bottom-right-radius: " +
    target.style.borderBottomRightRadius +
    "</br>";
}
