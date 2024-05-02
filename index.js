var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

var numberOfTrapButtons = document.querySelectorAll(".trap").length;

for (var i = 0; i < numberOfTrapButtons; i++) {
  document.querySelectorAll(".trap")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "f":
      var tom1 = new Audio("beats/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("beats/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("beats/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("beats/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("beats/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("beats/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("beats/bass-hit.mp3");
      kick.play();
      break;
    case ";":
      var kick = new Audio("beats/left_crash_semicolon.mp3");
      kick.play();
      break;
    case "q":
      var kick = new Audio("traps/trap_1.mp3");
      console.log("hello")
      kick.play();
      break;
    case "w":
      var kick = new Audio("traps/trap_2.mp3");
      kick.play();
      break;
    case "e":
      var kick = new Audio("traps/trap_3.mp3");
      kick.play();
      break;
    case "r":
      var kick = new Audio("traps/trap_4.mp3");
      kick.play();
      break;
    case "t":
      var kick = new Audio("traps/trap_5.mp3");
      kick.play();
      break;
    case "i":
      var kick = new Audio("traps/linkin.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
