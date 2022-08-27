window.addEventListener("load", ()=>{ //Escuchamos cuando se carga el documento

    //Creamos 2 constantes y guardamos los elementos que necesitamos
    const display = document.querySelector('.calculadora-display'); //Para buscar el display
    const keypadButton = document.getElementsByClassName('keypad-button'); //Otra para buscar los botones - Se guardaran dentro de un HTMLCollection


    //Creamos otra constante para convertir el HTMLcOLLECTION a Array y poder iterarlo 
    const keypadButtonArray = Array.from(keypadButton);

    //Iteramos por nuestro nuevo array de botones
    keypadButtonArray.forEach( (button) => {

        //A cada boton se le agrega un listener que escucha cuando el usuario hace click //este listener imprime el texto que tiene cada boton
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
    // eval(display.innerHTML) :toma el string y resuelve la operaciòn: 4+4=8 - 2+2=4
    //se escribe en el display e igualamos al hacer eso:
    display.innerHTML = eval(display.innerHTML)       //se cambia el contenido del display por la resolucion del eval 
}

//vamos a cambiar 'actualizar' el contenido del botòn por el el nuevo botòn (button) que cliqueemos
function actualizar(display, button) {
    if (display.innerHTML == 0) { 
        display.innerHTML = ' '; 
    }
    display.innerHTML += button.innerHTML; // coloca el nùmero que clickeamos uno a lado de otro dentro del display 
}

//Si el inner del boton es cero 
//lo igualamos a uno vacio


function borrar(display){
    display.innerHTML = 0
}