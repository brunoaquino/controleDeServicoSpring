<nav class="navbar-default navbar-side" role="navigation" ng-controller="SideBarController">
	<div class="sidebar-collapse">
		<ul class="nav" id="main-menu">
			<li class="text-center">
				<img ng-src="{{imgPerfil}}" class="user-image img-responsive"/>
			</li>
			
			<li ng-repeat="item in menu" ng-click="teste(menu,item)";>
				<a class="{{item.ativo}}">
					<i class="{{item.imgClass}}"></i>{{item.nome}}
				</a>
			</li>
		</ul>

	</div>

</nav>
