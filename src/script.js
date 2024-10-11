// Query some selectors
const gameBox = document.querySelector(".game-box");
const inputContainer = document.querySelector(".input-container");
const inputBox = document.querySelector(".input-box");
const applyButton = document.querySelector(".apply-button");
const resetButton = document.querySelector(".reset-button");

// A mouse event and its handler
gameBox.onmouseover = gameBox.onmouseout = handler;

// An event handler function to gray paint any element with id=pixel
function handler(event) {
  // Get the id of the HTML element
  const target = event.target
  const elID = target.id;

  if (event.type == "mouseover" && elID == "pixel") {
    event.target.style.background = "gray";
  }
  /*if (event.type == "mouseout" && elID == "pixel") {
    event.target.style.background = "";
  }*/
}

inputContainer.addEventListener("click", (event) => {
  // Get either the class, id or tag of the HTML element
  function str(el) {
    if (!el) return "null";
    return el.className || el.id || el.tagName;
  }

  const tagName = str(event.target)

  console.log(`Clicked on: ${tagName}`);

  switch( tagName ) {
    case "apply-button":
      applyFromInputBox();
      break;
    case "reset-button":
      resetChanges();
      break;
  }
});

function applyFromInputBox() {
  const inputValue = parseInt(inputBox.value);
  console.log(`inputValue was: ${inputValue}`);
  inputBox.value = "";

  if( isNaN(inputValue) || inputValue < 6 || inputValue > 100 ) { 
    alert("You must insert a number between 6 and 100");
    return ;
  }

  return generateFlexPixelsFromInput(inputValue);
};

function generateFlexPixelsFromInput(input) {
  resetChanges();

  // Create new pixels
  for( let i = 0; i < input; i++ ) {
    const pixel = document.createElement("div");
    pixel.setAttribute("id", "pixel");
    gameBox.appendChild(pixel);
  }
};

function resetChanges() {
  const pixels = Array.from(document.querySelectorAll("#pixel"));
 
  // Remove any previous pixels on the box
  for( const pixel of pixels ) {
    gameBox.removeChild(pixel);
  }
}