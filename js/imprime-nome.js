var trsPacientes = document.getElementsByClassName("paciente");

percorreArray(trsPacientes, function(pacienteTr){
	//Valores para calcular usando uma funcao anonima
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
	};

	console.log(pacienteAtual.nome);
});
