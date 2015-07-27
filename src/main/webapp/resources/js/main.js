var modulo = angular.module('csAdmin', ['minhasDiretivas','ngAnimate']);

var menuItens = [
              	{
              		ativo:'active-menu',
              		imgClass:'fa fa-dashboard fa-3x',
              		nome:'Dashboard'
              	},
              	{
              		ativo:'',
              		imgClass:'fa fa-desktop fa-3x',
              		nome:'UI Elements'
              	},
              	{
              		ativo:'',
              		imgClass:'fa fa-qrcode fa-3x',
              		nome:'Tabs & Panels'
              	},
              	{
              		ativo:'',
              		imgClass:'fa fa-bar-chart-o fa-3x',
              		nome:' Morris Charts'
              	},
           	{
              		ativo:'',
              		referencia:'table.html',
              		imgClass:'fa fa-table fa-3x',
              		nome:'Table Examples'
              	},
           	{
              		ativo:'',
              		referencia:'form.html',
              		imgClass:'fa fa-edit fa-3x',
              		nome:'Forms'
              	}
             ];

//.config(function($routeProvider, $locationProvider) {
//	
//	$locationProvider.html5Mode({
//		  enabled: true,
//		  requireBase: false
//		});
//
//	$locationProvider.html5Mode(true);
//
//	$routeProvider.when('/views/login.jsp', {
//		templateUrl: 'controleDeServico/views/teste.jsp',
//		controller: 'IndexController'
//	});
//
//	$routeProvider.otherwise({redirectTo: 'controleDeServico/views/login.jsp'});
//
//});
