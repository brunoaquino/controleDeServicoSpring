var selecionaItemMenu;
var listaDeUsuarios = [];
var tableUsuario;
var usuarioSendoEditado;

function atualizaTableUsuario(){
	buscaUsuarios();
	tableUsuario.bootstrapTable('load', listaDeUsuarios);
}

function carregaUsuario(usuario){
	if(usuario!=undefined){
		$("#inputEmail").val(usuario.email);
		$("#inputLogin").val(usuario.login);
	}
	$("#btnSalvarUsuario").hide();
	$("#btnAlterarUsuario").show();
}

window.operateEventsCadastroDeUsuario = {
	'click .edit' : function(e, value, row, index) {
		usuarioSendoEditado = row;
		$("#divCadastroUsuario").show("slow","swing");
		carregaUsuario(row);
	},
	'click .remove' : function(e, value, row, index) {
		if(confirm("Excluir Registro?")){
			call('http://localhost:8080/controleDeServico/rest/usuario/delete',row).success(function(retorno) {
				alert("Resgistro excluído com sucesso");
				
				atualizaTableUsuario();
				
			}).error(function(msg) {
				trataMensagemDeErro(msg);
			});
		}
	}
};

function buscaUsuarios() {
	call('http://localhost:8080/controleDeServico/rest/usuario/getUsuarios', {})
			.success(function(retorno) {
				listaDeUsuarios = retorno;
			}).error(function(msg) {
				trataMensagemDeErro(msg);
			});
}

modulo.controller('CadastroDeUsuarioController', function($scope, $http) {
	$("#divCadastroUsuario").hide();
	
	$("#btnSalvarUsuario").show();
	$("#btnAlterarUsuario").hide();

	buscaUsuarios();

	ativaTable();
	
	$scope.salvar = function(usuario) {
		if (isDadosValidos(usuario)) {
			call('http://localhost:8080/controleDeServico/rest/usuario/salva',usuario).success(function(retorno) {
				limpaFormulario();
				alert("Usuário criado com sucesso");
				atualizaTableUsuario();
				$("#divCadastroUsuario").hide("slow","swing");
				
			}).error(function(msg) {
				trataMensagemDeErro(msg);
			});
		}
	}
	$scope.editar = function(usuario) {
		if(usuario.login!=undefined){
			usuarioSendoEditado.login = usuario.login;
		}
		if(usuario.email!=undefined){
			usuarioSendoEditado.email = usuario.email;
		}
		if(usuario.senha!=undefined){
			usuarioSendoEditado.senha = usuario.senha;
		}
		
		if (isDadosValidos(usuarioSendoEditado)) {
			call('http://localhost:8080/controleDeServico/rest/usuario/atualiza',usuarioSendoEditado).success(function(retorno) {
				limpaFormulario();
				alert("Usuário editado com sucesso");
				atualizaTableUsuario();
				$("#divCadastroUsuario").hide("slow","swing");
				
			}).error(function(msg) {
				trataMensagemDeErro(msg);
			});
		}
	}

	$scope.cancelar = function(usuario) {
		limpaFormulario();
		$("#divCadastroUsuario").hide("slow","swing");
	}
	
	$scope.novoUsuario = function() {
		limpaFormulario();
		$("#btnSalvarUsuario").show();
		$("#btnAlterarUsuario").hide();
		$("#divCadastroUsuario").show("slow","swing");
	}


	function isDadosValidos(usuario) {
		var dadosValidos = true;
		if (usuario != undefined) {
			if (usuario.email == '') {
				alert("Campo e-mail é obrigatório");
				dadosValidos = false;
			}
			if (usuario.login == '') {
				alert("Campo login é obrigatório");
				dadosValidos = false;
			}
			if (usuario.senha == '') {
				alert("Campo senha é obrigatório");
				dadosValidos = false;
			}
		} else {
			alert("Preencha os dados do usuário");
			dadosValidos = false;
		}

		return dadosValidos;
	}
	
	function limpaFormulario(){
		$("#inputEmail").val("");
		$("#inputLogin").val("");
		$("#inputSenha").val("");
	};

	function ativaTable() {
		tableUsuario = $('#tableUsuario');
		tableUsuario.bootstrapTable({
				data : listaDeUsuarios,
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
