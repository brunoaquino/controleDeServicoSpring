<%@ page contentType="text/html; charset=UTF-8"%>
<div class="panel panel-primary" ng-controller="CadastroDeClienteController" id="divCadastroCliente">
	<div class="panel-heading">Cadastro de Cliente</div>
	<form role="form" name="formulario">
		<div class="panel-body">
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="form-group col-md-5">
							<label class="control-label" for="inputNomeCliente">Nome:</label> <span class="obrigatorio">*</span> 
							<input class="form-control" id="inputNomeCliente" />
						</div>
						<div class="form-group col-md-5">
							<label class="control-label" for="inputEmailCliente">E-mail:</label> 
							<input class="form-control" id="inputEmailCliente" />
						</div>
					</div>
					<div class="row">
                        <div class="form-group col-md-2">
							<label class="control-label" for="inputCpfCliente">CPF:</label> <span class="obrigatorio">*</span> 
							<input class="form-control" id="inputCpfCliente" />
						</div>
                        <div class="form-group col-md-2">
							<label class="control-label" for="inputRgCliente">RG:</label> 
							<input class="form-control" id="inputRgCliente" />
						</div>
						<div class="form-group col-md-2 col-md-offset-1">
							<label class="control-label" for="inputDataNascimento">Data de Nascimento:</label>
			                <div class='input-group date' id='inputDataNascimento'>
			                    <input type='text' class="form-control" id='inputDataNascimentoValue'/>
			                    <span class="input-group-addon">
			                        <span class="glyphicon glyphicon-calendar"></span>
			                    </span>
			                </div>
           				</div>
                        <div class="form-group col-md-2">
							<label class="control-label" for="inputTelefoneCliente">Telefone:</label><span class="obrigatorio">*</span>
							<input class="form-control" id="inputTelefoneCliente" />
						</div>
                        <div class="form-group col-md-2">
							<label class="control-label" for="inputCelularCliente">Celular:</label>
							<input class="form-control" id="inputCelularCliente" />
						</div>
					</div>
					<div class="row">
						<div class="form-group col-md-3">
							<label class="control-label" for="inputEnderecoCliente">Endereço:</label>
							<input class="form-control" id="inputEnderecoCliente" />
						</div>
						<div class="form-group col-md-2">
							<label class="control-label" for="inputCepCliente">CEP:</label>
							<input class="form-control" id="inputCepCliente" />
						</div>
						<div class="form-group col-md-2">
							<label class="control-label" for="SelectEstado">Estado:</label>
							<select class="form-control" id="SelectEstado">
								 <option value="">Selecione</option>
                                 <option ng-repeat="estado in estados" value="{{estado.value}}">{{estado.texto}}</option>
                             </select>
						</div>
						<div class="form-group col-md-2">
							<label class="control-label" for="inputBairroCliente">Bairro:</label>
							<input class="form-control" id="inputBairroCliente"/>
						</div>
					</div>
					<div class="row">
						<div class="form-group col-md-6">
							<label class="control-label" for="inputObservacoesCliente">Observações:</label>
							<textarea class="form-control" id="inputObservacoesCliente"rows="3"></textarea>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="panel-footer" style="text-align: right;">
			<button type="button" class="btn btn-success" ng-click="salvar()" id="btnSalvarCliente">salvar</button>
			<button type="button" class="btn btn-success" ng-click="editar()" id="btnAlterarCliente">Editar</button>
			<button type="button" class="btn btn-primary" ng-click="cancelar()">Cancelar</button>
		</div>
	</form>
</div>

<div class="row" ng-controller="CadastroDeClienteController">
	<div class="col-md-12">
		<div class="panel panel-primary">
			<div class="panel-heading" style="text-align: right;">
				<label style="float: left;margin-top: 7px;">
					Clientes
				</label>
				<button type="button" ng-click="novoCliente()" class="btn btn-default" style="margin-left: 80%;">Novo Cliente</button>
			</div>
			<div class="panel-body">
				<table id="tableCliente" data-sort-name="nome">
					<thead>
						<tr>
							<th data-field="nome">Nome</th>
							<th data-field="dataDeCadastro" data-formatter="dataConverterFormatter">Data de Cadastro</th>
							<th data-field="operate" data-formatter="operateFormatterPadrao" data-events="operateEventsCadastroDeCliente">Ação</th>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	</div>
</div>