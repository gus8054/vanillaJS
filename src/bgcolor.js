function selectColor() {
  const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34",
  ];
  colorNumber1 = Math.floor(Math.random() * colors.length);
  colorNumber2 = Math.floor(Math.random() * colors.length);
  while (colorNumber1 === colorNumber2) {
    colorNumber2 = Math.floor(Math.random() * colors.length);
  }
  const selectedColors = [colors[colorNumber1], colors[colorNumber2]];
  return selectedColors;
}
const rootElement = document.querySelector(":root");
const selectedColors = selectColor();
rootElement.style.setProperty("--main-bg-color1", selectedColors[0]);
rootElement.style.setProperty("--main-bg-color2", selectedColors[1]);
