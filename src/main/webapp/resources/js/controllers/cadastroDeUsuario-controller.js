var selecionaItemMenu;

modulo.controller('CadastroDeUsuarioController', function($scope, $http) {
	$scope.divErro = 'hidden';
	
	$scope.salvar = function(usuario) {
//		if ($scope.formulario.$valid) {
			if (isDadosValidos(usuario)) {
				call('http://localhost:8080/controleDeServico/rest/usuario/salva', usuario).success(function(retorno){
					alert("Usuário criado com sucesso");
				})
				.error(function(msg){
					trataMensagemDeErro(msg);
				});
			}
//		}
	}

	$scope.cancelar = function() {

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
		}else{
			alert("Preencha os dados do usuário");
			dadosValidos = false;
		}

		return dadosValidos;
	}

	

});
