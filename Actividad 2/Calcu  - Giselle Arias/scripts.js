function mostrarResultado(resultado){
    document.getElementById('display').value = resultado;
}

function suma(){
    let numero1 = +document.getElementById('num1').value;
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(numero1 + numero2);
}

function resta(){
    let numero3 = -document.getElementById('num1').value;
    let numero4 = -document.getElementById('num2').value;
    mostrarResultado(numero3 - numero4);
}

function multiplicación(){
    let numero5 = document.getElementById('num1').value;
    let numero6 = document.getElementById('num2').value;
    mostrarResultado(numero5 * numero6);
}

function división(){
    let numero7 = document.getElementById('num1').value;
    let numero8 = document.getElementById('num2').value;
    mostrarResultado(numero7/numero8);
}

function raízCuadrada(){
    let numero9 = document.getElementById('num2').value;
    mostrarResultado(Math.sqrt(numero9));
}

function potencia(){
    let numero12 = document.getElementById('num1').value;
    let numero13 = document.getElementById('num2').value;
    mostrarResultado(Math.pow(numero12, numero13));
}

function ce(){
    let display = document.getElementById('display').value = ' ';
    let numer10 = document.getElementById('num1').value = ' ';
    let numero11 = document.getElementById('num2').value = ' ';
}

