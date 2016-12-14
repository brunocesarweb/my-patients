//Captura as classes do paciente
var trsPacientes = document.getElementsByClassName("paciente");

//Chama a function percorreArray pasando as classes paciente e a function imprimeEModificaTdImc
percorreArray(trsPacientes, imprimeEModificaTdImc);

//Function que imprime os resultados do IMC na tabela
function imprimeEModificaTdImc(pacienteTr){

    var pacienteAtual = montaPaciente(pacienteTr);
    var imc = pacienteAtual.pegaImc();

    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
    tdImc.textContent = imc;

    //console.log(imc);
}//End  - imprimeEModificaTdImc

//Monta o obj paciente
function montaPaciente(pacienteTr){
	//Valores para calcular
	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

	//Cria objeto com os valores do paciente atual
	var paciente = {
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
	return paciente;
}//End - montaPaciente

// for( var posicaoAtual = 0; posicaoAtual <= trsPacientes.length -1; posicaoAtual++ ){
// 	//Atualiza a posição do array
// 	var pacienteTr = trsPacientes[posicaoAtual];
//
// 	var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
// 	var pacienteAtual = montaPaciente(pacienteTr);
//
// 	var imc = pacienteAtual.pegaImc();
// 	tdImc.textContent = imc;
//
// 	//Exibe cálculo no console
// 	//console.log(imc);
// }; // End - for
