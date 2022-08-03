var messageArray = ["i crochet sometimes!"];
var textPosition = 0;
var speed = 100;

typewriter = () => {
  document.querySelector("#message2").innerHTML =
    messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";

  if (textPosition++ != messageArray[0].length) setTimeout(typewriter, speed);
};

window.addEventListener("load", typewriter);
