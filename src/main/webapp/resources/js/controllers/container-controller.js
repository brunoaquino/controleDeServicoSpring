var selecionaItemMenu;

modulo.controller('ContainerController', function($scope, $http) {
	
	$scope.cadastroVisibilidade = 'hidden';
	
	selecionaItemMenu = function(item) {
		$scope.labelTituloDoFormulario = item.titulo;
		$scope.labelSubTituloDoFormulario = item.subTitulo;
		
		if(item.titulo=='Cadastros'){
			$("#cadastros").show();
		}else{
			$("#cadastros").hide();
		}
		
			
	};
	selecionaItemMenu(menuItens[0]);
});




