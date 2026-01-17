const button = document.getElementById("b");
const resultArea = document.getElementById('r');
function rn(){ 
    const Num = Math.floor(Math.random() * 999999);
    resultArea.textContent = Num;
}
button.addEventListener("click",rn);
