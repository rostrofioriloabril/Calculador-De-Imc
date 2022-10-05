var pacientes = document.querySelectorAll('.paciente');
var tabla =document.querySelector('#tabla-pacientes');
tabla.addEventListener('dblclick', function(event){ //ya reconoce los nuevos td
    //event.target es el do, el ejecutor del evento pues el this en este caso es el dueño y el dueño es la tabla
    
    // event.target.remove() Aca estoy eliminando unicamente ls td, no toda la fila
    event.target.parentNode.classList.add('fadeOut');
    setTimeout(function(){ //intervalo de tiempo para ejecutar una accion
        event.target.parentNode.remove();
        // el parent node significa, a ese no, a su papá. Osea subi una jerarquia en elnivel de la event.target, que vimos que nuestro event.target es el td
    },400); 
});
