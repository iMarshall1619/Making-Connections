var number = 2;
var number2 = 418;
var todRow2 = document.getElementById('todRow2');
var todRow3 = document.getElementById('todRow3');
var twoElement = document.getElementById('two');
var fiveElement = document.getElementById('five');

var newName = 'Grand Master';
var OG = document.getElementById('nam');


function addMe() {
    number --;
    number2 ++;
    todRow2.remove(); 
    twoElement.innerText = number;
    fiveElement.innerText = number2;
}

function removeMe() {
    number --;
    todRow2.remove(); 
    twoElement.innerText = number;
}
function addMe2() {
    number --;
    number2 ++;
    todRow3.remove(); 
    twoElement.innerText = number;
    fiveElement.innerText = number2;
}

function removeMe2() {
    number --;
    todRow3.remove(); 
    twoElement.innerText = number;
}

function changeName() {
    OG.innerText = newName;
}