document.getElementById('+').addEventListener('click', addNums);
document.getElementById('-').addEventListener('click', subNums);
document.getElementById('*').addEventListener('click', mulNums);
document.getElementById('/').addEventListener('click', divNums);

function addNums(){
    let x = document.getElementById('number1').value;
    let y = document.getElementById('number2').value;
    let res = Number(x)+Number(y);
    let out = document.getElementById('result');
    out.value = res;
}

function subNums(){
    let x = document.getElementById('number1').value;
    let y = document.getElementById('number2').value;
    let res = Number(x)-Number(y);
    let out = document.getElementById('result');
    out.value = res;
}
function mulNums(){
    let x = document.getElementById('number1').value;
    let y = document.getElementById('number2').value;
    let res = Number(x)*Number(y);
    let out = document.getElementById('result');
    out.value = res;
}
function divNums(){
    let x = document.getElementById('number1').value;
    let y = document.getElementById('number2').value;
    let res = Number(x)/Number(y);
    let out = document.getElementById('result');
    out.value = res;
}