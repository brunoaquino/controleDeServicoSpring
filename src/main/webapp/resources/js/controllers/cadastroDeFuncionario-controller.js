var selecionaItemMenu;
var listaDeFuncionarios = [];
var tableFuncionario;
var funcionarioSendoEditado;

function atualizaTable(){
	buscaFuncionarios();
	tableFuncionario.bootstrapTable('load', listaDeFuncionarios);
}

function ativaMascarasFuncionario(){
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
}

function carregaFuncionario(funcionario){
	if(funcionario!=undefined){
		$("#inputNomeFuncionario").val(funcionario.nome);
		$("#inputEmailFuncionario").val(funcionario.email);
		$("#inputCpfFuncionario").val(funcionario.cpf);
		$("#inputRgFuncionario").val(funcionario.rg);
		$("#inputDataNascimentoValue").val(funcionario.dataDeNascimento);
		$("#inputTelefoneFuncionario").val(funcionario.telefone);
		$("#inputCelularFuncionario").val(funcionario.celular);
		$("#inputEnderecoFuncionario").val(funcionario.endereco);
		$("#inputCepFuncionario").val(funcionario.cep);
		$("#SelectEstado").val(funcionario.estado);
		$("#inputBairroFuncionario").val(funcionario.bairro);
		$("#inputObservacoesFuncionario").val(funcionario.observacoes);
		ativaMascarasFuncionario();
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
	
	ativaMascarasFuncionario();
	
	buscaFuncionarios();

	ativaTable();
	
	$scope.salvar = function() {
			var funcionario = {};
			funcionario.nome = $("#inputNomeFuncionario").val();
			funcionario.email = $("#inputEmailFuncionario").val();
			funcionario.cpf = $("#inputCpfFuncionario").val().replace("-","").replace(".","").replace(".","");;
			if($('#inputDataNascimentoValue').val() != ""){
				funcionario.dataDeNascimento = $('#inputDataNascimentoValue').val();
			}			
			funcionario.rg = $("#inputRgFuncionario").val();
			funcionario.telefone = $("#inputTelefoneFuncionario").val();
			funcionario.celular = $("#inputCelularFuncionario").val();
			funcionario.endereco = $("#inputEnderecoFuncionario").val();
			funcionario.cep = $("#inputCepFuncionario").val();
			funcionario.estado = $("#SelectEstado").val();
			funcionario.bairro = $("#inputBairroFuncionario").val();
			funcionario.observacoes = $("#inputObservacoesFuncionario").val();
			
			isDadosValidos(funcionario);
			
			call('http://localhost:8080/controleDeServico/rest/funcionario/salva',funcionario).success(function(retorno) {
				limpaFormulario();
				alert("Usuário criado com sucesso");
				atualizaTable();
				$("#divCadastroFuncionario").hide("slow","swing");
				
			}).error(function(msg) {
				trataMensagemDeErro(msg);
			});
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
