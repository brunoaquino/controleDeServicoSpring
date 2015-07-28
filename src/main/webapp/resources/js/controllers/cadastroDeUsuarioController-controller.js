var selecionaItemMenu;

modulo.controller('CadastroDeUsuarioController', function($scope, $http) {
	$scope.divErro = 'hidden';
	
	$scope.salvar = function() { 
		if ($scope.formulario.$invalid) {
			//Mostrar Erro com Alert
        }
    }
	
	$scope.cancelar = function() {
		$scope.divErro = 'hidden';
		$scope.erro = "";
	}
	
});




