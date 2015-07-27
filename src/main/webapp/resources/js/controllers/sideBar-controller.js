modulo.controller('SideBarController', function($scope, $http) {
	$scope.imgPerfil = "../resources/img/find_user.png";
	
	 $scope.ativaItem = function(menu,itemSelecionado){
		 for(var i = 0; i < menu.length; i++) {
			 menuItem = menu[i];
			 menuItem.ativo = '';
		 }
		 itemSelecionado.ativo = 'active-menu';
		 selecionaItemMenu(itemSelecionado);
	 }
	
	$scope.menu = menuItens;
});
