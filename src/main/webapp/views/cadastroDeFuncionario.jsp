<%@ page contentType="text/html; charset=UTF-8"%>
<div class="panel panel-primary" ng-controller="CadastroDeFuncionarioController" id="divCadastroFuncionario">
	<div class="panel-heading">Cadastro de Funcionário</div>
	<form role="form" name="formulario">
		<div class="panel-body">
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="form-group col-md-5">
							<label class="control-label" for="inputNomeFuncionario">Nome:</label> <span class="obrigatorio">*</span> 
							<input class="form-control" id="inputNomeFuncionario" ng-model="funcionario.nome" />
						</div>
						<div class="form-group col-md-5">
							<label class="control-label" for="inputEmailFuncionario">E-mail:</label>
							<input class="form-control" id="inputEmailFuncionario" ng-model="funcionario.email" />
						</div>
					</div>
					<div class="row">
                        <div class="form-group col-md-2">
							<label class="control-label" for="inputCpfFuncionario">CPF:</label>
							<input class="form-control" id="inputCpfFuncionario" ng-model="funcionario.cpf" />
						</div>
                        <div class="form-group col-md-2">
							<label class="control-label" for="inputRgFuncionario">RG:</label>
							<input class="form-control" id="inputRgFuncionario" ng-model="funcionario.rg" />
						</div>
						<div class="form-group col-md-2 col-md-offset-1">
							<label class="control-label" for="inputDataNascimento">Data de Nascimento:</label>
			                <div class='input-group date' id='inputDataNascimento'>
			                    <input type='text' class="form-control" />
			                    <span class="input-group-addon">
			                        <span class="glyphicon glyphicon-calendar"></span>
			                    </span>
			                </div>
           				</div>
                        <div class="form-group col-md-2">
							<label class="control-label" for="inputTelefoneFuncionario">Telefone:</label>
							<input class="form-control" id="inputTelefoneFuncionario" ng-model="funcionario.telefone" />
						</div>
					</div>
					<div class="row">
						<div class="form-group col-md-3">
							<label class="control-label" for="inputEnderecoFuncionario">Endereço:</label>
							<input class="form-control" id="inputEnderecoFuncionario" ng-model="funcionario.endereco" />
						</div>
						<div class="form-group col-md-2">
							<label class="control-label" for="inputCepFuncionario">CEP:</label>
							<input class="form-control" id="inputCepFuncionario" ng-model="funcionario.cep" />
						</div>
						<div class="form-group col-md-2">
							<label class="control-label" for="inputCepFuncionario">Estado:</label>
							<select class="form-control">
                                 <option>Bahia</option>
                                 <option>Goiás</option>
                                 <option>São Paulo</option>
                             </select>
						</div>
						<div class="form-group col-md-2">
							<label class="control-label" for="inputBairroFuncionario">Bairro:</label>
							<input class="form-control" id="inputBairroFuncionario" ng-model="funcionario.bairro" />
						</div>
					</div>
					<div class="row">
						<div class="form-group col-md-6">
							<label class="control-label" for="inputDescric
							aoFuncionario">Observações:</label>
							<textarea class="form-control" id="inputDescricaoFuncionario "ng-model="servico.descricao" rows="3"></textarea>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label" for="inputDescricaoFuncionario">Observações:</label>
							<textarea class="form-control" id="inputDescricaoFuncionario "ng-model="servico.descricao" rows="3"></textarea>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="panel-footer" style="text-align: right;">
			<button type="button" class="btn btn-success" ng-click="salvar(funcionario)" id="btnSalvarFuncionario">salvar</button>
			<button type="button" class="btn btn-success" ng-click="editar()" id="btnAlterarFuncionario">Editar</button>
			<button type="button" class="btn btn-primary" ng-click="cancelar()">Cancelar</button>
		</div>
	</form>
</div>

<div class="row" ng-controller="CadastroDeFuncionarioController">
	<div class="col-md-12">
		<div class="panel panel-primary">
			<div class="panel-heading" style="text-align: right;">
				<label style="float: left;margin-top: 7px;">
					Serviços
				</label>
				<button type="button" ng-click="novoFuncionario()" class="btn btn-default" style="margin-left: 80%;">Novo Funcionário</button>
			</div>
			<div class="panel-body">
				<table id="tableFuncionario" data-sort-name="nome">
					<thead>
						<tr>
							<th data-field="nome">Nome</th>
							<th data-field="preco" data-formatter="moneyFormatter">Preço</th>
							<th data-field="descricao">Descrição</th>
							<th data-field="operate" data-formatter="operateFormatterPadrao" data-events="operateEventsCadastroDeServico">Ação</th>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	</div>
</div>