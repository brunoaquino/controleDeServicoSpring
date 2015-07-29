<%@ page contentType="text/html; charset=UTF-8" %>
<div class="panel panel-primary" ng-controller="CadastroDeUsuarioController" id="divCadastro">
	<div class="panel-heading">
		Cadastro de Usuário
	</div>
	<form role="form" name="formulario">
		<div class="panel-body">
			<div class="row">
				<div class="col-md-12">
                	<div class="row">
	                	<div class="col-md-6">
		                	<div class="form-group">
		                       	<label class="control-label" for="inputEmail">E-mail</label>
		                        <input class="form-control" name="email" id="inputEmail" ng-model="usuario.email"/>
		                    </div>
	                	</div>
                	</div>
                	<div class="row">
	                	<div class="form-group col-md-4">
	                        <label class="control-label" for="inputLogin">Login</label>
	                        <input class="form-control" id="inputLogin" ng-model="usuario.login" required name="login" ng-maxlength='200'/>
	                    </div>
	                	<div class="form-group col-md-4">
	                        <label class="control-label" for="inputSenha">Senha</label>
	                        <input class="form-control" type="password" id="inputSenha" ng-model="usuario.senha" required name="senha" ng-minlength='4' ng-maxlength='12'/>
	                    </div>
                	</div>
				</div>
			</div>
		</div>
		<div class="panel-footer">
	        <button type="button" class="btn btn-success" ng-click="salvar(usuario)" id="btnSalvar">salvar</button>
	        <button type="button" class="btn btn-success" ng-click="editar(usuario)" id="btnAlterar">Editar</button>
	        <button type="button" class="btn btn-primary" ng-click="cancelar(usuario)">Cancelar</button>
	    </div>
    </form>
</div>

<div class="row" ng-controller="CadastroDeUsuarioController">
    <div class="col-md-12">
        <!-- Advanced Tables -->
        <div class="panel panel-primary">
            <div class="panel-heading">
                 Usuários
                 <button type="button" ng-click="novoUsuario()" class="btn btn-default" style="margin-left: 80%;">Novo usuario</button>
            </div>
            <div class="panel-body">
				<table id="table" data-sort-name="login">
				    <thead>
				        <tr>
				            <th data-field="login">Login</th>
				            <th data-field="email">Email</th>
				            <th data-field="ativo" data-formatter="statusFormatter">Status</th>
				            <th data-field="operate" data-formatter="operateFormatterPadrao" data-events="operateEventsCadastroDeUsuario">Ação</th>
				        </tr>
				    </thead>
				</table>            
            </div>
        </div>
        <!--End Advanced Tables -->
    </div>
</div>