<%@ page contentType="text/html; charset=UTF-8"%>
<div class="panel panel-primary" ng-controller="CadastroDeUsuarioController" id="divCadastroUsuario">
	<div class="panel-heading">Cadastro de Usuário</div>
	<form role="form" name="formulario">
		<div class="panel-body">
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="form-group col-md-4">
							<label class="control-label" for="inputEmailUsuario">E-mail:</label> <span class="obrigatorio">*</span> 
							<input class="form-control" id="inputEmailUsuario" />
						</div>
					</div>
					<div class="row">
						<div class="form-group col-md-2">
							<label class="control-label" for="inputLoginUsuario">Login:</label> <span class="obrigatorio">*</span> 
							<input class="form-control" id="inputLoginUsuario" />
						</div>
						<div class="form-group col-md-2">
							<label class="control-label" for="inputSenhaUsuario">Senha:</label> <span class="obrigatorio">*</span> 
							<input class="form-control" type="password" id="inputSenhaUsuario">
						</div>
						
					</div>
					<div class="row">
						<div class="form-group col-md-2">
							<label class="control-label" for="SelectEmpresaDoUsuario">Empresa:</label><span class="obrigatorio">*</span> 
							<select class="form-control" id="SelectEmpresaDoUsuario">
								 <option value="">Selecione</option>
                                 <option ng-repeat="empresa in empresas" value="{{empresa.id}}">{{empresa.nomeFantasia}}</option>
                             </select>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="panel-footer" style="text-align: right;">
			<button type="button" class="btn btn-success" ng-click="salvar()" id="btnSalvarUsuario">Salvar</button>
			<button type="button" class="btn btn-success" ng-click="editar()" id="btnAlterarUsuario">Editar</button>
			<button type="button" class="btn btn-primary" ng-click="cancelar()">Cancelar</button>
		</div>
	</form>
</div>

<div class="row" ng-controller="CadastroDeUsuarioController">
	<div class="col-md-12">
		<div class="panel panel-primary">
			<div class="panel-heading" style="text-align: right;">
				<label style="float: left;margin-top: 7px;">
					Usuários
				</label>
				<button type="button" ng-click="novoUsuario()" class="btn btn-default" style="margin-left: 80%;">Novo Usuário</button>
			</div>
			<div class="panel-body">
				<table id="tableUsuario" data-sort-name="login">
					<thead>
						<tr>
							<th data-field="login">Login</th>
							<th data-field="email">E-mail</th>
							<th data-field="dataDeCadastro" data-formatter="dataConverterFormatter">Data de Cadastro</th>
							<th data-field="ativo" data-formatter="statusFormatter">Status</th>
							<th data-field="operate" data-formatter="operateFormatterPadrao" data-events="operateEventsCadastroDeUsuario">Ação</th>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	</div>
</div>