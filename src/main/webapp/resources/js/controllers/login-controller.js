var modulo = angular.module('csAdmin', []);

modulo.controller( 'LoginController', function($scope, $http) {
	
	
	$scope.showModal = false;
    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };
	
    $scope.autenticar = function()
    { 
    	var obj = {
    			email : $scope.login,
    			senha : $scope.senha
    		}
    	
		call('http://localhost:8080/controleDeServico/rest/autenticacao/autentica', obj)
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
