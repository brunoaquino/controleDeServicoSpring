<div class="col-md-12" id="cadastros">
	<div class="tabbable">
		<ul class="nav nav-tabs">
		  <li class="active"><a href="#tab1" data-toggle="tab">Usu�rio</a></li>
		  <li><a href="#tab2" data-toggle="tab">Servi�o</a></li>
		  <li><a href="#tab3" data-toggle="tab">Funcion�rio</a></li>
		  <li><a href="#tab4" data-toggle="tab">Cliente</a></li>
		</ul>
	    <div class="tab-content">
	      <div class="tab-pane active" id="tab1">
	        	<%@include file="cadastroDeUsuario.jsp" %>
	      </div>
	      <div class="tab-pane" id="tab2">
	       		<%@include file="cadastroDeServico.jsp" %>
	      </div>
	      <div class="tab-pane" id="tab3">
	       		<%@include file="cadastroDeFuncionario.jsp" %>
	      </div>
	      <div class="tab-pane" id="tab4">
	       		<%@include file="cadastroDeCliente.jsp" %>
	      </div>
	    </div>
	</div>
</div>