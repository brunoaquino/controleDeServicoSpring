var selecionaItemMenu;

modulo.controller('ContainerController', function($scope, $http) {

	selecionaItemMenu = function(item) {
		$scope.labelTituloDoFormulario = item.nome;
		$scope.labelSubTituloDoFormulario = 'Teste de subtitulo'
//		$scope.conteudo = 'http://localhost:8080/controleDeServico/views/teste.jsp';
		$scope.objTeste = '<div class="row" ng-include="teste.jsp"></div>';
	};

});
