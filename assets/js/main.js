// main.js

console.log("Hello, World!");

let targetElement = document.querySelector("h1");
console.log(targetElement.outerHTML);
targetElement.addEventListener("mouseover", function() {
  console.log(this.innerText);
  this.innerText = "SHOP";
  this.style = "cursor: wait";
});

targetElement.addEventListener("mouseout", function() {
  this.innerText = "Target";
  this.style = "cursor: pointer";
});
