var btnAdicionar = document.querySelector("#adicionar-paciente");
var alturaValor = document.querySelector('.alturaV');
var pesoValor = document.querySelector('.pesoV');
var nombreValor = document.querySelector('.nombreV');
btnAdicionar.addEventListener("click", function(event){
    event.preventDefault();


    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosDelPaciente(form);
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes"); 
    tabla.appendChild(pacienteTr);
    
});

//TOMAMOS LOS DATOS DEL FORMULARIO Y SE LO PONEMOS A LAS VARIABLES
function capturarDatosDelPaciente(form){
    //Capturando los datos del formulario
    var paciente = {
       nombre: form.nombre.value,
       peso: form.peso.value,
       altura: form.altura.value,
       imc: calcularIMC(form.peso.value, form.altura.value)

    }

    return paciente;
};


// CREAMOS LOS TD Y TR
function construirTr(paciente){
    //CREAR LOS TDS Y UN TR
    let valor = false
    let valor2 = false
    let valor3 = false
    if(nombreValor.value == ""){
        nombreValor.placeholder= 'nombre incorrecto';
        valor3 = false;
    }
    else{
        valor3 = true
    }
    if((pesoValor.value < 0)||(pesoValor.value > 500)||(pesoValor.value=="")){
        pesoValor.value='';
        pesoValor.placeholder='peso incorrecto';
        valor = false
    }else{
        valor=true;
    }
        
    if((alturaValor.value < 0)||(alturaValor.value > 2.51)||(alturaValor.value == "")){
        alturaValor.value='';
        alturaValor.placeholder='Altura incorrecta'
        valor2 = false;
    }
    else{
        valor2= true;
    }
    if((valor == true) && (valor2 == true) && (valor3 == true)){

    var pacienteTr = document.createElement("tr");
    var nombreTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var imcTd = document.createElement("td");
    //ASIGNAR VALORES A LA PROPIEDAD TEXT CONTENT
    nombreTd.textContent = paciente.nombre;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    imcTd.textContent = paciente.imc;
    
    //ASIGNAR EL TR DE LOS TD
    
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(imcTd);
}
return pacienteTr;
}