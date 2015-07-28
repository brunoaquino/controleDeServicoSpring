var selecionaItemMenu;

modulo.controller('ContainerController', function($scope, $http) {
	
	$scope.cadastroVisibilidade = 'hidden';
	
	selecionaItemMenu = function(item) {
		$scope.labelTituloDoFormulario = item.titulo;
		$scope.labelSubTituloDoFormulario = item.subTitulo;
		
		if(item.titulo=='Cadastros'){
			$scope.cadastroVisibilidade = 'visible';
		}else{
			$scope.cadastroVisibilidade = 'hidden';
		}
		
			
	};
	selecionaItemMenu(menuItens[0]);
});




