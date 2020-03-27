let tleft = document.getElementById("tleft");
let tright = document.getElementById("tright");
let bleft = document.getElementById("bleft");
let bright = document.getElementById("bright");
let previewBox = document.getElementById("preview");
let cssOutput = document.getElementById("cssOutput");

let ranges = [tleft, tright, bleft, bright];
let topLeft = 0;
let topRight = 0;
let bottomLeft = 0;
let bottomRight = 0;
let unit = "%";

for (let index = 0; index < ranges.length; index++) {
  ranges[index].addEventListener("change", function() {
    adjustRadius(ranges[index], previewBox, ranges[index].dataset.border);
  });
  ranges[index].addEventListener("mousemove", function() {
    adjustRadius(ranges[index], previewBox, ranges[index].dataset.border);
  });
}

function adjustRadius(input, target, border) {
  switch (border) {
    case "tleft":
      topLeft = input.value;
      break;
    case "tright":
      topRight = input.value;
      break;
    case "bleft":
      bottomLeft = input.value;
      break;
    case "bright":
      bottomRight = input.value;
      break;
    default:
      break;
  }
  target.style.borderRadius =
    topLeft + unit + topRight + unit + bottomLeft + unit + bottomRight + unit;
  document.getElementById("output").innerHTML =
    "<p> border-radius: " + target.style.borderRadius + "</p>";
}
