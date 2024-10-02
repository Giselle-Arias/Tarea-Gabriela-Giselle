function dado(){
    const max = +document.querySelector('#maximo').value;
    const min = +document.querySelector('#minimo').value;

    const dado = Math.floor(Math.random()* (max - min)) + min;

    document.querySelector('#salida').textContent = dado;
}