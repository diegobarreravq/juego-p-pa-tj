const piedra = document.querySelector('button.principal-option__rock--button');
const papel = document.querySelector('button.principal-option__paper--button');
const tijeras = document.querySelector('button.principal-option__scissors--button');

const iniciar = document.querySelector('button.principal__start');
const reiniciar = document.querySelector('button.principal__reinit');
const resultado = document.querySelector('div.mensaje');

let eleccion = document.querySelector('div.election');
let maquina = document.querySelector('div.machine');

reiniciar.addEventListener('click',()=>{
    restart();
})

piedra.addEventListener('click',()=>{ 
    if(!papel.classList.contains('option--green') && !tijeras.classList.contains('option--green')){
        
        elementoSeleccionado(piedra);
        insertValue(piedra.innerHTML);
    }else{
        restart()
        elementoSeleccionado(piedra);
        insertValue(piedra.innerHTML);
    }
})

papel.addEventListener('click',()=>{ 
    if(!piedra.classList.contains('option--green') && !tijeras.classList.contains('option--green')){
        elementoSeleccionado(papel);
        insertValue(papel.innerHTML);
    }else{
        restart()
        elementoSeleccionado(papel);
        insertValue(papel.innerHTML);
    }
})

tijeras.addEventListener('click',()=>{
    if(!piedra.classList.contains('option--green') && !papel.classList.contains('option--green')){
        elementoSeleccionado(tijeras);
        insertValue(tijeras.innerHTML);
    }else{
        restart()
        elementoSeleccionado(tijeras);
        insertValue(tijeras.innerHTML);
    }
})

iniciar.addEventListener('click',()=>{
    maquina.innerHTML = opcionOponente();
    comparate();
})

function numeroAleatorio (){
    return Math.round(Math.random()*4);   
}

function opcionOponente (){
    let objeto = '';

    if(numeroAleatorio()===1){
        objeto = 'piedra';
    }else if(numeroAleatorio()===2){
        objeto = 'papel';
    }else{
        objeto = 'tijeras';
    }

    return objeto;
}

function comparate(){
    if(eleccion.innerHTML == maquina.innerHTML){
        resultado.innerHTML = '😐 Empate';
    }else if(eleccion.innerHTML === 'piedra' && maquina.innerHTML === 'tijeras'){
        resultado.innerHTML = '🤩‼ GANASTE ‼';
        insertGreenColor(eleccion);
        insertGreenColor(resultado);
        insertRedColor(maquina);
    }else if(eleccion.innerHTML === 'tijeras' && maquina.innerHTML === 'papel'){
        resultado.innerHTML = '🤩‼ GANASTE ‼';
        insertGreenColor(eleccion);
        insertGreenColor(resultado);
        insertRedColor(maquina);
    }else if(eleccion.innerHTML === 'papel' && maquina.innerHTML === 'piedra'){
        resultado.innerHTML = '🤩‼ GANASTE ‼';
        insertGreenColor(eleccion);
        insertGreenColor(resultado);
        insertRedColor(maquina);
    }else{
        resultado.innerHTML = '😔 perdiste';
        insertRedColor(eleccion);
        insertGreenColor(maquina)
    }
}
function insertRedColor (elemento){
    elemento.classList.add('red');  
}

function insertGreenColor (elemento){
    elemento.classList.add('green');
    
}

function restart (){
    eleccion.innerHTML='';
    maquina.innerHTML = '';
    resultado.innerHTML = '';
    piedra.classList.remove('option--green');
    papel.classList.remove('option--green');
    tijeras.classList.remove('option--green');
    eleccion.classList.remove('red');
    maquina.classList.remove('red');
    resultado.classList.remove('red');
    eleccion.classList.remove('green');
    maquina.classList.remove('green');
    resultado.classList.remove('green');
}

function insertValue (valor){
    eleccion.innerHTML = valor;
}

function elementoSeleccionado(elemento){
    
    elemento.classList.add('option--green');
}


