function buttonOnLight() {
  const heading = document.getElementsByClassName("heading")[0];
  heading.innerHTML = "Bulb is: ON";
  heading.style.color = "black";
  let inputColor = document.getElementsByName("input-color")[0].value;
  const light = document.getElementsByClassName("light")[0];
  console.log(inputColor);
  if (inputColor) {
    light.style.color = inputColor;
  } else {
    light.style.color = "yellow";
  }

  const backgroundBody = document.getElementsByTagName("body")[0];
  backgroundBody.style.backgroundColor = "#ffffff";
}

function buttonOfflight() {
  const heading = document.getElementsByClassName("heading")[0];
  heading.innerHTML = "Bulb is: OFF";
  heading.style.color = "#ffffff";
  const light = document.getElementsByClassName("light")[0];
  light.style.color = "black";
  const backgroundBody = document.getElementsByTagName("body")[0];
  backgroundBody.style.backgroundColor = "#7b7a7b";
}

window.buttonOfflight = buttonOfflight;
window.buttonOnLight = buttonOnLight;
