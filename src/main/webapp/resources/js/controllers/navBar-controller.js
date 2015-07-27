modulo.controller('NavBarController', function($scope, $http) {
	$scope.ultimoAcesso = "Ultimo Acesso : 30 maio 2015 ";
	
	 $scope.logout = function(){
		 
		 call('http://localhost:8080/controleDeServico/rest/autenticacao/logout', {})
			.success(function(retorno){
				window.location = "http://localhost:8080/controleDeServico/views/login.jsp";
			})
			.error(function(msg){
				if(msg.responseText != undefined){
					alert(JSON.parse(msg.responseText).mensagemDeErro);
			}
		});
		 
	 }
});
