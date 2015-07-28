<div class="col-md-12" style="visibility: {{cadastroVisibilidade}};">
	<div class="tabbable">
		<ul class="nav nav-tabs">
		  <li class="active"><a href="#tab1" data-toggle="tab">Usuário</a></li>
		  <li><a href="#tab2" data-toggle="tab">Cliente</a></li>
		  <li><a href="#tab3" data-toggle="tab">Funcionário</a></li>
		</ul>
	    <div class="tab-content">
	      <div class="tab-pane active" id="tab1">
	        	<%@include file="cadastroDeUsuario.jsp" %>
	      </div>
	      <div class="tab-pane" id="tab2">
	       		<%@include file="cadastroDeCliente.jsp" %>
	      </div>
	      <div class="tab-pane" id="tab3">
	       		<%@include file="cadastroDeFuncionario.jsp" %>
	      </div>
	    </div>
	</div>
</div>