// function display(){
//     document.getElementById("demo").innerText+="Hello"+",";
// }
// setInterval(display,200)


const myInterval = setInterval(myTimer, 2000);
    
function myTimer() {
    const date = new Date();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}
// const date = new Date();

// console.log(date.toLocaleTimeString())
// console.log(date.toLocaleDateString())


function myStop() {
    clearInterval(myInterval);
}