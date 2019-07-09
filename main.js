//Area of trapezoid

//Listerner
document.getElementById('calculateBtn').addEventListener('click', calculate)

function calculate () {

    //input
    let lengthT= Number(document.getElementById('lT').value);
    let lengthB= Number(document.getElementById('lB').value);
    let height= Number(document.getElementById('h').value);

    //process
    let output = Math.round((1/2)*(lengthT + lengthB)* height);

    //Output - dispaly
    document.getElementById('area').innerHTML = output ;
}


