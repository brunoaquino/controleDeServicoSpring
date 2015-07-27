var selecionaItemMenu;

modulo.controller('ContainerController', function($scope, $http, $compile) {

	selecionaItemMenu = function(item) {
		$scope.labelTituloDoFormulario = item.nome;
		$scope.labelSubTituloDoFormulario = 'Teste de subtitulo'
//		$scope.conteudo = 'http://localhost:8080/controleDeServico/views/teste.jsp';
		var html = '<div class="row" ng-include="teste.jsp"></div>';
		
		var template  = angular.element(html);
		
		var compiled = $compile(template)("@");
		
//		var element = linkFn($scope);
		
		$scope.labelTituloDoFormulario.appendChild(template);
		
		
	};

});
