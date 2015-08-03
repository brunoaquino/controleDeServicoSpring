<%@ page contentType="text/html; charset=UTF-8"%>
<div class="panel panel-primary"
	ng-controller="CadastroDeServicoController" id="divCadastroServico">
	<div class="panel-heading">Cadastro de Serviço</div>
	<form role="form" name="formulario">
		<div class="panel-body">
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="form-group col-md-6">
							<label class="control-label" for="inputNomeServico">Nome:</label><span
								class="obrigatorio">*</span> <input class="form-control"
								name="nome" id="inputNomeServico" ng-model="servico.nome" />
						</div>
						<div class="form-group col-md-2">
							<label class="control-label" for="inputPreco">Preço:</label> <input
								class="form-control" id="inputPreco" ng-model="servico.preco"
								name="preco" />
						</div>
					</div>
					<div class="row">
						<div class="form-group col-md-3">
							<label class="control-label" for="inputDescricao">Descrição:</label>
							<textarea class="form-control" id="inputDescricao"
								ng-model="servico.descricao" name="descricao" rows="3"></textarea>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="panel-footer" style="text-align: right;">
			<button type="button" class="btn btn-success"
				ng-click="salvar(servico)" id="btnSalvarServico">salvar</button>
			<button type="button" class="btn btn-success" ng-click="editar()"
				id="btnAlterarServico">Editar</button>
			<button type="button" class="btn btn-primary" ng-click="cancelar()">Cancelar</button>
		</div>
	</form>
</div>

<div class="row" ng-controller="CadastroDeServicoController">
	<div class="col-md-12">
		<div class="panel panel-primary">
			<div class="panel-heading" style="text-align: right;">
				<label style="float: left;margin-top: 7px;">
					Serviços
				</label>
				
				<button type="button" ng-click="novoServico()"
					class="btn btn-default" style="margin-left: 80%;">Novo
					Serviço</button>
			</div>
			<div class="panel-body">
				<table id="tableServico" data-sort-name="nome">
					<thead>
						<tr>
							<th data-field="nome">Nome</th>
							<th data-field="preco" data-formatter="moneyFormatter">Preço</th>
							<th data-field="descricao">Descrição</th>
							<th data-field="operate" data-formatter="operateFormatterPadrao"
								data-events="operateEventsCadastroDeServico">Ação</th>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	</div>
</div>