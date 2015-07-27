modulo.controller( 'LoginController', function($scope, $http) {
	
    $scope.autenticar = function(usuario) { 
    	
		call('http://localhost:8080/controleDeServico/rest/autenticacao/autentica', usuario)
			.success(function(retorno){
				window.location = "http://localhost:8080/controleDeServico/views/index.jsp";
			})
			.error(function(msg){
				if(msg.responseText != undefined){
					alert(JSON.parse(msg.responseText).mensagemDeErro);
			}
		});
    }
	
});
