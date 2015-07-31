var selecionaItemMenu;
var listaDeFuncionarios = [];
var tableFuncionario;
var funcionarioSendoEditado;

function atualizaTable(){
	buscaFuncionarios();
	tableFuncionario.bootstrapTable('load', listaDeFuncionarios);
}

function carregaFuncionario(funcionario){
	if(funcionario!=undefined){
		$("#inputNomeFuncionario").val(funcionario.nome);
		if(!(funcionario.preco.toString().indexOf(".") > -1)){
			$("#inputPreco").val(funcionario.preco + ".00");
		}else{
			$("#inputPreco").maskMoney('mask', funcionario.preco);
		}
		$("#inputPreco").maskMoney('mask');
		$("#inputDescricao").val(funcionario.descricao);
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
	
	$("#btnSalvarFuncionario").show();
	$("#btnAlterarFuncionario").hide();
	
	$('#inputCepFuncionario').mask('00000-000');
	$('#inputTelefoneFuncionario').mask('(00) 0000-0000');
	$('#inputCelularFuncionario').mask('(00) 0000-0000');
	$('#inputCpfFuncionario').mask('000.000.000-00');
	$('#inputRgFuncionario').mask('99999999999');
	
	 $('#inputDataNascimento').datepicker({
			autoclose : true,
			todayHighlight : true,
			language : 'pt-BR'
		});
	
	buscaFuncionarios();

	ativaTable();
	
	$scope.salvar = function(funcionario) {
		funcionario.preco = $('#inputPreco').maskMoney('unmasked')[0]; 
		
		if (isDadosValidos(funcionario)) {
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
			if (funcionario.nome == '') {
				alert("Campo nome é obrigatório");
				dadosValidos = false;
			}
		} else {
			alert("Preencha os dados obrigatórios (*) do serviço");
			dadosValidos = false;
		}

		return dadosValidos;
	}
	
	function limpaFormulario(){
		$("#inputNomeFuncionario").val("");
		$("#inputPreco").val("");
		$("#inputDescricao").val("");
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
