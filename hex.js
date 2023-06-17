const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 'A', 'B', 'C', 'D', 'E', 'F'];

var button = document.querySelector('.btn-click');
var colorCode = document.querySelector('.colorCode');

function random(){
    let randomNumber = Math.floor(Math.random() * hex.length);
    return randomNumber;
}

button.addEventListener('click', function() {
    let hexColor = "#"
    for(let i = 0 ; i < 6; i++){
        hexColor += hex[random()];
    }
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    colorCode.innerHTML = hexColor;
});




