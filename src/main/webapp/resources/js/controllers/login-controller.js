angular.module('csAdmin').controller( 'LoginController', function($scope, $http) {
	
	$scope.eventos = {};
	
	var obj = {
		email : "bruno.aquino",
		senha : "020893"
	}
	
    $scope.eventos.Autenticar = function()
    { 
		call('http://localhost:8080/controleDeServico/home/index', obj)
		.success(function(retorno){
			$scope.login = retorno.email;
			$scope.senha = retorno.senha;
		})
		.error(function(msg){
			alert(msg.statusText);
		});
    }
	
});
