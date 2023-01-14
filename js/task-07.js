const fontControlRef = document.querySelector("#font-size-control");
const fontTextRef = document.querySelector("#text");

console.log(fontControlRef);
console.log(fontTextRef);

fontControlRef.oninput = function () {
  console.log(fontControlRef.value);

  fontTextRef.style.fontSize = `${fontControlRef.value}px`;
};
