const color = ['#F15025',"Rgba(133,122,200)",'Red',"Green","#F1f5f8"];

let button = document.querySelector('.btn-click');
let span = document.querySelector('.colorCode');

function random(){
    let randomNumber = Math.floor(Math.random()*5);
    return randomNumber;
}

button.addEventListener('click', () => {
    let tempRandom = random();
    document.body.style.backgroundColor = color[tempRandom];
    span.innerHTML = color[tempRandom];
});





