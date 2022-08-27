window.addEventListener('load', ()=>{
 
    const display = document.querySelector('.calculadora-display');
    const keypadButton = document.getElementsByClassName('keypad-button');

    const keypadButtonArray = Array.from(keypadButton);

    keypadButtonArray.forEach( (button) => {

        button.addEventListener('click', () => {
            calculator(button, display); 
        })
    })
});

function calculator (button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display);
            break;
    
        default:
            actualizar(display, button);
            break;
    }
}

function calcular (display){

    display.innerHTML = eval(display.innerHTML)
}

function actualizar(display, button) {
    if (display.innerHTML == 0) { 
        display.innerHTML = ''; 
    }
    display.innerHTML += button.innerHTML; 
}

function borrar(display){
    display.innerHTML = 0
}