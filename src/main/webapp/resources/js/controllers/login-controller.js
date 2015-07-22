angular.module('csAdmin').controller( 'LoginController', function($scope, $http) {
	
	$scope.eventos = {};
	
	var obj = {
		email : $scope.login,
		senha : $scope.senha
	}
	
    $scope.eventos.Autenticar = function()
    { 
		call('http://localhost:8080/controleDeServico/home/index', obj, function(msg) {
			alert("oi");
		});
    }
	
});
