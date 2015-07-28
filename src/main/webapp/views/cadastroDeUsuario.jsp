<div class="panel panel-primary" ng-controller="CadastroDeUsuarioController">
	<div class="panel-heading">
		Cadastro de Usuário
	</div>
	<form role="form" name="formulario">
		<div class="panel-body">
			<div class="row">
				<div class="col-md-12">
	                	<div class="row">
		                	<div class="col-md-6">
			                	<div class="form-group" ng-class="{ 'has-error' :formulario.email.$invalid && !formulario.email.$pristine }">
			                       	<label class="control-label" for="inputEmail">E-mail</label>
			                        <input class="form-control" type="email" name="email" id="inputEmail" ng-model="usuario.email" required/>
			                    </div>
		                	</div>
	                	</div>
	                	<div class="row">
		                	<div class="form-group col-md-4" ng-class="{ 'has-error' :formulario.login.$invalid && !formulario.login.$pristine}">
		                        <label class="control-label" for="inputLogin">Login</label>
		                        <input class="form-control" id="inputLogin" ng-model="usuario.login" required name="login" ng-maxlength='200'/>
		                    </div>
		                	<div class="form-group col-md-4" ng-class="{ 'has-error' :formulario.senha.$invalid && !formulario.senha.$pristine}">
		                        <label class="control-label" for="inputSenha">Senha</label>
		                        <input class="form-control" type="password" id="inputSenha" ng-model="usuario.senha" required name="senha" ng-minlength='4'/>
		                    </div>
	                	</div>
				</div>
			</div>
		</div>
		<div class="panel-footer">
	        <button type="submit" class="btn btn-success" ng-click="salvar()">salvar</button>
	        <button type="button" class="btn btn-primary" ng-click="cancelar()">Cancelar</button>
	    </div>
    </form>
</div>