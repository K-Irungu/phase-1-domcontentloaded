// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    replaceParagraph("This is really cool!");
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );


  function replaceParagraph(newText) {
    let paragraph = document.querySelector('#text');
    paragraph.textContent = newText;
  }