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
						<div class="form-group col-md-3">
                            <label class="control-label">Tipo de Pessoa:</label>
                            <div class="radio">
                                <label>
                                    <input type="radio" name="optionsRadios" id="pessoaFisicaRadio" value="F" checked onclick="$('#pessoaJuridicaDiv').hide();$('#pessoaFisicaDiv').show();"/>Pessoa Fisica
                                </label>
                            </div>
                            <div class="radio">
                                <label>
                                    <input type="radio" name="optionsRadios" id="pessoaJuridicaRadio" value="J" onclick="$('#pessoaFisicaDiv').hide();$('#pessoaJuridicaDiv').show();"/>Pessoa Juridica
                                </label>
                            </div>
                        </div>
                        <div class="form-group col-md-2" id="pessoaFisicaDiv">
							<label class="control-label" for="inputCpfFuncionario">CPF:</label>
							<input class="form-control" id="inputCpfFuncionario" ng-model="funcionario.cpf" />
						</div>
                        <div class="form-group col-md-2" id="pessoaJuridicaDiv">
							<label class="control-label" for="inputCnpjFuncionario">CNPJ:</label>
							<input class="form-control" id="inputCnpjFuncionario" ng-model="funcionario.cnpj" />
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