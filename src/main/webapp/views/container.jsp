<div id="page-wrapper" ng-controller="ContainerController">
	<div id="page-inner">
		<div class="row">
			<div class="col-md-12">
				<h2>{{labelTituloDoFormulario}}</h2>
				<h5>{{labelSubTituloDoFormulario}}</h5>
			</div>
		</div>
		<hr />
		<%@include file="cadastros.jsp" %>
		<%@include file="gerenciadorDeServicos.jsp" %>
	</div>
</div>