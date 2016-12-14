var botao = document.getElementById("calcula-imcs");
botao.addEventListener("click", function(){

  //Captura as classes do paciente
  var trsPacientes = document.getElementsByClassName("paciente");

  //Chama a function percorreArray pasando as classes paciente e a function
  percorreArray(trsPacientes, function(pacienteTr){
    //Valores para calcular
    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

    //Cria objeto com os valores do paciente atual
    var pacienteAtual = {
      nome: tdNome.textContent,
      peso: tdPeso.textContent,
      altura: tdAltura.textContent,
      pegaImc: function(){
        //Verifica se tem altura
        if ( this.altura != 0) {
          //Cálculo do imc
          var imc = this.peso / (this.altura * this.altura);
          return imc;

        } else {
          console.log("Não posso executar uma divisão por 0!");
        } // end - if
      }
    }

    var imc = pacienteAtual.pegaImc();
    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
    tdImc.textContent = imc;

    console.log(imc);

  });

});//end - addEventListener click
