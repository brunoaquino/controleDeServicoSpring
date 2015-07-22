<!DOCTYPE html>
<html ng-app="csAdmin">
<head>
	<meta charset="utf-8" />
	<title>Controle de Serviço</title>
	<%@include file="imports.jsp" %>
</head>
<body>
    <div class="container">
		<div class="row text-center ">
			<div class="col-md-12">
				<br></br> 
				<h2>CS Admin : Login</h2>

				<h5>(Loge-se para obter acesso)</h5>
				<br></br>
			</div>
		</div>
		<div class="row ">
			<div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
				<div class="panel panel-default">
					<div class="panel-heading">
						<strong>Entre seus dados para logar</strong>
					</div>
					<div class="panel-body">
						<form ng-controller="LoginController">
							<br></br>
							<div class="form-group input-group">
								<span class="input-group-addon">
									<i class="fa fa-tag"></i>
								</span>
								<input class="form-control" ng-model="login">
							</div>
							<div class="form-group input-group">
								<span class="input-group-addon">
									<i class="fa fa-lock"></i>
								</span>
								<input type="password" class="form-control" ng-model="senha">
								
							</div>
							<div class="form-group">
								<label class="checkbox-inline"> 
									<input type="checkbox" /> Lembre me
								</label>
								<span class="pull-right"> 
									<a href="#"> Esqueceu sua senha? </a>
								</span>
							</div>
							<a class="btn btn-primary" href="index.jsp">Entrar</a>
							<hr></hr>
							Não registrado ? 
							<a href="registeration.html">Click aqui </a>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>