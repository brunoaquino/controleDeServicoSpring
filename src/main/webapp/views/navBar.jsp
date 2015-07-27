<form ng-controller="NavBarController">
	<nav class="navbar navbar-default navbar-cls-top " role="navigation" style="margin-bottom: 0">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="index.jsp">Cs Admin</a>
		</div>
		<div style="color: white; padding: 15px 50px 5px 50px; float: right; font-size: 16px;">
			{{ultimoAcesso}} &nbsp;<a class="btn btn-danger square-btn-adjust" ng-click="logout()">Sair</a>
		</div>
	</nav>
</form>
