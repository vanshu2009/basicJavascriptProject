const heading = document.querySelector("h1");
const btn = document.querySelector("button");
const box = document.querySelector("div");

btn.addEventListener("click",function(){
    const red = Math.floor(Math.random() * 256);  
    const green = Math.floor(Math.random() * 256);  
    const blue = Math.floor(Math.random() * 256); 
    const randomColor = `rgb(${red},${green},${blue})`;
    box.style.backgroundColor = randomColor
    box.innerText = randomColor
    heading.style.color = randomColor
})