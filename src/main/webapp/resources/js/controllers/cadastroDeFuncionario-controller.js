var selecionaItemMenu;
var listaDeFuncionarios = [];
var tableFuncionario;
var funcionarioSendoEditado;

function atualizaTable(){
	buscaFuncionarios();
	tableFuncionario.bootstrapTable('load', listaDeFuncionarios);
}

function carregaFuncionario(funcionario){
	if(funcionario!=undefined){// TODO COntinuar daki
		$("#inputNomeFuncionario").val(funcionario.nome);
		if(!(funcionario.preco.toString().indexOf(".") > -1)){
			$("#inputPreco").val(funcionario.preco + ".00");
		}else{
			$("#inputPreco").maskMoney('mask', funcionario.preco);
		}
		$("#inputPreco").maskMoney('mask');
		
		$("#inputNomeFuncionario").val("");
		$("#inputEmailFuncionario").val("");
		$("#inputCpfFuncionario").val("");
		$("#inputRgFuncionario").val("");
		$("#inputDataNascimentoValue").val("");
		$("#inputTelefoneFuncionario").val("");
		$("#inputCelularFuncionario").val("");
		$("#inputEnderecoFuncionario").val("");
		$("#inputCepFuncionario").val("");
		$("#SelectEstado").val("");
		$("#inputBairroFuncionario").val("");
		$("#inputObservacoesFuncionario").val("");
	}
	$("#btnSalvarFuncionario").hide();
	$("#btnAlterarFuncionario").show();
}

window.operateEventsCadastroDeFuncionario = {
	'click .edit' : function(e, value, row, index) {
		funcionarioSendoEditado = row;
		$("#divCadastroFuncionario").show("slow","swing");
		carregaFuncionario(row);
	},
	'click .remove' : function(e, value, row, index) {
		if(confirm("Excluir Registro?")){
			call('http://localhost:8080/controleDeServico/rest/funcionario/delete',row).success(function(retorno) {
				alert("Resgistro excluído com sucesso");
				
				atualizaTable();
				
			}).error(function(msg) {
				trataMensagemDeErro(msg);
			});
		}
	}
};

function buscaFuncionarios() {
	call('http://localhost:8080/controleDeServico/rest/funcionario/getFuncionarios', {})
			.success(function(retorno) {
				listaDeFuncionarios = retorno;
			}).error(function(msg) {
				trataMensagemDeErro(msg);
			});
}

modulo.controller('CadastroDeFuncionarioController', function($scope, $http) {
	$("#divCadastroFuncionario").hide();
	
	$scope.estados = estados;
	
	$("#btnSalvarFuncionario").show();
	$("#btnAlterarFuncionario").hide();
	
	$('#inputCepFuncionario').mask('00000-000');
	$('#inputTelefoneFuncionario').mask('(00) 0000-0000');
	$('#inputCelularFuncionario').mask('(00) 0000-0000');
	$('#inputCpfFuncionario').mask('999.999.999-99');
	$('#inputRgFuncionario').mask('99999999999');
	
	 $('#inputDataNascimento').datepicker({
			autoclose : true,
			format:'dd/mm/yyyy',
			todayHighlight : true,
			language : 'pt-BR'
		});
	
	buscaFuncionarios();

	ativaTable();
	
	$scope.salvar = function(funcionario) {
		if (isDadosValidos(funcionario)) {
			funcionario.dataDeNascimento = $('#inputDataNascimentoValue').val();
			funcionario.cpf = funcionario.cpf.replace("-","").replace(".","").replace(".","");
			
			call('http://localhost:8080/controleDeServico/rest/funcionario/salva',funcionario).success(function(retorno) {
				limpaFormulario();
				alert("Usuário criado com sucesso");
				atualizaTable();
				$("#divCadastroFuncionario").hide("slow","swing");
				
			}).error(function(msg) {
				trataMensagemDeErro(msg);
			});
		}
	}
	$scope.editar = function() {
			funcionarioSendoEditado.nome = $('#inputNomeFuncionario').val();
			funcionarioSendoEditado.preco = $('#inputPreco').maskMoney('unmasked')[0];
			funcionarioSendoEditado.descricao = $('#inputDescricao').val();
		
		if (isDadosValidos(funcionarioSendoEditado)) {
			call('http://localhost:8080/controleDeServico/rest/funcionario/atualiza',funcionarioSendoEditado).success(function(retorno) {
				limpaFormulario();
				alert("Serviço editado com sucesso");
				atualizaTable();
				$("#divCadastroFuncionario").hide("slow","swing");
				
			}).error(function(msg) {
				trataMensagemDeErro(msg);
			});
		}
	}

	$scope.cancelar = function() {
		limpaFormulario();
		$("#divCadastroFuncionario").hide("slow","swing");
	}
	
	$scope.novoFuncionario = function() {
		limpaFormulario();
		$("#btnSalvarFuncionario").show();
		$("#btnAlterarFuncionario").hide();
		$("#divCadastroFuncionario").show("slow","swing");
	}


	function isDadosValidos(funcionario) {
		var dadosValidos = true;
		if (funcionario != undefined) {
			if (funcionario.nome == undefined || funcionario.nome == '') {
				alert("Campo nome é obrigatório");
				dadosValidos = false;
			}
			if (funcionario.cpf == undefined || funcionario.cpf == '') {
				alert("Campo CPF é obrigatório");
				dadosValidos = false;
			}
		} else {
			alert("Preencha os dados obrigatórios (*) do funcionário");
			dadosValidos = false;
		}

		return dadosValidos;
	}
	
	function limpaFormulario(){
		$("#inputNomeFuncionario").val("");
		$("#inputEmailFuncionario").val("");
		$("#inputCpfFuncionario").val("");
		$("#inputRgFuncionario").val("");
		$("#inputDataNascimentoValue").val("");
		$("#inputTelefoneFuncionario").val("");
		$("#inputCelularFuncionario").val("");
		$("#inputEnderecoFuncionario").val("");
		$("#inputCepFuncionario").val("");
		$("#SelectEstado").val("");
		$("#inputBairroFuncionario").val("");
		$("#inputObservacoesFuncionario").val("");
	};

	function ativaTable() {
		tableFuncionario = $('#tableFuncionario');
		tableFuncionario.bootstrapTable({
				data : listaDeFuncionarios,
				classes : "table table-hover table-condensed table-hover",
				cache : false,
				height : 400,
				pagination : true,
				pageSize : 10,
				pageList : [ 10, 25, 50, 100, 200 ],
				search : true,
				showColumns : true,
				showRefresh : true,
				minimumCountColumns : 2,
				sortOrder : "asc",
			});
	}
});
