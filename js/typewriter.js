//Typewriter
document.addEventListener('DOMContentLoaded',function(event){

var python = "print(\"Hello World!\")"
var java = "System.out.println(\"Hello World!\")"
var c = "int main(){ \n \
  printf(\"Hello World!\"); \n\
}"
var bash = "echo \"Hello World!\" "
var matlab = "disp(\"Hello World!\")"
var r = "cat ('Hello World!')"
var jvscrpt = "console.log(\"Hello world!\")"
var haskell = "main :: IO () \n main = putStrLn \"Hello, World!\""

// Insert other languages here
var hello27 = "Hello Class of 2027!"

var dataText = [ python,java,c,bash,matlab,r,jvscrpt,haskell, hello27];



function typeWriter(text, i, fnCallback) {
  // check if text isn't finished yet
  if (i < text.length) {
    // add next character to h1
    document.querySelector("h3").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

    // wait for a while and call this function again for next character
    setTimeout(function () {
      typeWriter(text, i + 1, fnCallback);
    }, 75);
  }
  // text finished, initiate delete process
  else {
    // wait for a while and initiate delete
    setTimeout(function () {
      deleteCharacters(text, i, fnCallback);
    }, 1000);
  }
}

function deleteCharacters(text, i, fnCallback) {
  // check if text isn't empty yet
  if (i >= 0) {
    // delete the last character from h1
    document.querySelector("h3").innerHTML = text.substring(0, i) + '<span aria-hidden="true"></span>';

    // wait for a while and call this function again for the previous character
    setTimeout(function () {
      deleteCharacters(text, i - 1, fnCallback);
    }, 50);
  }
  // text fully deleted, call the callback function
  else if (typeof fnCallback === 'function') {
    setTimeout(fnCallback, 700);
  }
}

function StartTextAnimation(i) {
  // check if dataText[i] exists or reset index to 0
  if (typeof dataText[i] === 'undefined') {
    i = 0;
  }

  // text exists! start typewriter animation
  typeWriter(dataText[i], 0, function () {
    // after callback (and whole text has been animated), start next text
    StartTextAnimation((i + 1) % dataText.length); // Use modulus operator to wrap around to the beginning
  });
}
StartTextAnimation(0);
});
