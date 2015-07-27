var selecionaItemMenu;

modulo.controller('ContainerController', function($scope, $http, $compile) {

	selecionaItemMenu = function(item) {
		$scope.labelTituloDoFormulario = item.nome;
		$scope.labelSubTituloDoFormulario = 'Teste de subtitulo'
			
		if(item.nome=="Dashboard"){
			$scope.visibilidade = 'show'
		}else{
			$scope.visibilidade = 'hidden'
		}
		
	};

});
