var titulo = document.querySelector(".titulo");
titulo.textContent = "Vinicius Nutrição";

var trPacientes = (document.querySelectorAll(".paciente"));

    for (var i = 0; i < trPacientes.length; i++) {

        var tdpeso = trPacientes[i].querySelector(".info-peso");
        var peso = tdpeso.textContent;
        
        var tdaltura = trPacientes[i].querySelector(".info-altura");
        var altura = tdaltura.textContent;
        
        var imc = peso / (altura * altura);
        
        var pesovalido = validaPeso(peso);
        var alturavalida = validaAltura(altura);
        
        var tdImc = trPacientes[i].querySelector(".info-imc");
        var nomePaciente = trPacientes[i].querySelector(".info-nome");
        
        if(!pesovalido) {
            console.log("Paciente "+nomePaciente.textContent+" está com peso inválido");
            tdpeso.textContent = "Peso Inválido";
            pesovalido = false;
        }
        if(!alturavalida) {
            console.log("Paciente "+nomePaciente.textContent+" está com altura inválida");
            tdaltura.textContent = "Altura Inválida";
            alturavalida = false;
        }
        
        if(pesovalido && alturavalida) {
            tdImc.textContent = imc.toFixed(2);
        }else{
            tdImc.textContent = "ERRO!";
            trPacientes[i].classList.add("paciente-invalido");
        }
    }

    function validaPeso(peso) {
        if(peso >= 0 && peso < 1000) {
            return true;
        }else{
            return false;
        }
    }
    
    function validaAltura(altura) {
        if(altura >= 0 && altura < 3) {
            return true;
        }else{
            return false;
        }
    }

function calculaImc(peso,altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}


