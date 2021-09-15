const firstOne = document.querySelector(".first-one");
const secondOne = document.querySelector(".second-one");
const addBtn = document.querySelector(".add");
const subBtn = document.querySelector(".sub");
const mulBtn = document.querySelector(".mul");
const divBtn = document.querySelector(".div");
const output=document.querySelector(".output")

addBtn.addEventListener("click",()=>{
  output.innerText=Number(firstOne.value)+Number(secondOne.value);
})
subBtn.addEventListener("click",()=>{
  output.innerText=Number(firstOne.value)-Number(secondOne.value);
})

mulBtn.addEventListener("click",()=>{
  output.innerText=Number(firstOne.value)*Number(secondOne.value);
})
divBtn.addEventListener("click",()=>{
  output.innerText=Number(firstOne.value)/Number(secondOne.value);
})