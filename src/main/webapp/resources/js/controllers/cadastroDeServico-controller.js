var selecionaItemMenu;
var listaDeServicos = [];
var table;
var servicoSendoEditado;

function atualizaTable(){
	buscaServicos();
	table.bootstrapTable('load', listaDeServicos);
}

function carregaServico(servico){
	if(servico!=undefined){
		$("#inputNomeServico").val(servico.nome);
		$("#inputPreco").val(servico.preco);
		$("#inputDescricao").val(servico.descricao);
	}
	$("#btnSalvarServico").hide();
	$("#btnAlterarServico").show();
}

window.operateEventsCadastroDeServico = {
	'click .edit' : function(e, value, row, index) {
		servicoSendoEditado = row;
		$("#divCadastroServico").show("slow","swing");
		carregaServico(row);
	},
	'click .remove' : function(e, value, row, index) {
		if(confirm("Excluir Registro?")){
			call('http://localhost:8080/controleDeServico/rest/servico/delete',row).success(function(retorno) {
				alert("Resgistro excluído com sucesso");
				
				atualizaTable();
				
			}).error(function(msg) {
				trataMensagemDeErro(msg);
			});
		}
	}
};

function buscaServicos() {
	call('http://localhost:8080/controleDeServico/rest/servico/getServicos', {})
			.success(function(retorno) {
				listaDeServicos = retorno;
			}).error(function(msg) {
				trataMensagemDeErro(msg);
			});
}

modulo.controller('CadastroDeServicoController', function($scope, $http) {
	$("#divCadastroServico").hide();
	
	$("#btnSalvarServico").show();
	$("#btnAlterarServico").hide();
	
	$("#inputPreco").maskMoney({
		showSymbol:true,
		symbol : 'R$ ',
		thousands : '.',
		decimal : ','
	});

	buscaServicos();

	ativaTable();
	
	$scope.salvar = function(servico) {
		servico.preco = $("#inputPreco").val().replace(",",".");
		if (isDadosValidos(servico)) {
			call('http://localhost:8080/controleDeServico/rest/servico/salva',servico).success(function(retorno) {
				limpaFormulario();
				alert("Usuário criado com sucesso");
				atualizaTable();
				$("#divCadastroServico").hide("slow","swing");
				
			}).error(function(msg) {
				trataMensagemDeErro(msg);
			});
		}
	}
	$scope.editar = function(servico) {
		servico.preco = $("#inputPreco").val().replace(",",".");
		if(servico.nome!=undefined){
			servicoSendoEditado.nome = servico.nome;
		}
		if(servico.preco!=undefined){
			servicoSendoEditado.preco = servico.preco;
		}
		if(servico.descricao!=undefined){
			servicoSendoEditado.descricao = servico.descricao;
		}
		
		if (isDadosValidos(servicoSendoEditado)) {
			call('http://localhost:8080/controleDeServico/rest/servico/atualiza',servicoSendoEditado).success(function(retorno) {
				limpaFormulario();
				alert("Serviço editado com sucesso");
				atualizaTable();
				$("#divCadastroServico").hide("slow","swing");
				
			}).error(function(msg) {
				trataMensagemDeErro(msg);
			});
		}
	}

	$scope.cancelar = function() {
		limpaFormulario();
		$("#divCadastroServico").hide("slow","swing");
	}
	
	$scope.novoServico = function() {
		limpaFormulario();
		$("#btnSalvarServico").show();
		$("#btnAlterarServico").hide();
		$("#divCadastroServico").show("slow","swing");
	}


	function isDadosValidos(servico) {
		var dadosValidos = true;
		if (servico != undefined) {
			if (servico.nome == '') {
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
		$("#inputNomeServico").val("");
		$("#inputPreco").val("");
		$("#inputDescricao").val("");
	};

	function ativaTable() {
		table = $('#tableServico');
		table.bootstrapTable({
				data : listaDeServicos,
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
