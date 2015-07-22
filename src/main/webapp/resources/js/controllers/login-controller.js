angular.module('csAdmin').controller( 'LoginController', function($scope, $http) {
	
	var obj={
			usuario:{
				login:"bruno.aquino@syncode.com",
				senha:"020893"
			}
			
	}
	$http.post('http://localhost:8080/controleDeServico/home/index',obj)
			.success(function(retorno) {
				$scope.login = retorno.email;
				$scope.senha = retorno.senha;
			}).error(function(msg) {
				alert(msg);
			});

});
