<%@ page contentType="text/html; charset=UTF-8"%>
<div class="col-md-12" id="gerenciadorDeServicos">
	<div class="panel panel-primary" ng-controller="GerenciadorDeServicosController" id="divOrdemDeServico">
		<div class="panel-heading">Ordem de Serviço</div>
		<form role="form" name="formulario">
			<div class="panel-body">
				<div class="row">
					<div class="col-md-12">
						<div class="row"></div>
					</div>
				</div>
			</div>
			<div class="panel-footer" style="text-align: right;">
				<button type="button" class="btn btn-success" ng-click="salvar()" id="btnSalvarOrdemDeServico">salvar</button>
				<button type="button" class="btn btn-success" ng-click="editar()" id="btnAlterarOrdemDeServico">Editar</button>
				<button type="button" class="btn btn-primary" ng-click="cancelar()">Cancelar</button>
			</div>
		</form>
	</div>
	
	<div class="row" ng-controller="GerenciadorDeServicosController">				
		<div class="col-md-12">
			<div class="panel panel-default">
				<div class="panel-heading">
					<label> Filtros</label>
				</div>
				<div class="panel-body">
					<div class="form-group col-md-2">
						<label class="control-label" for="inputDataInicioAgendamento">Data inicio:</label>
		                <div class='input-group date' id='inputDataInicioAgendamento'>
		                    <input type='text' class="form-control" id='inputDataInicioAgendamentoValue'/>
		                    <span class="input-group-addon">
		                        <span class="glyphicon glyphicon-calendar"></span>
		                    </span>
		                </div>
	  				</div>
					<div class="form-group col-md-2">
						<label class="control-label" for="inputDataFimAgendamento">Data Fim:</label>
		                <div class='input-group date' id="inputDataFimAgendamento">
		                    <input type='text' class="form-control" id='inputDataFimAgendamentoValue'/>
		                    <span class="input-group-addon">
		                        <span class="glyphicon glyphicon-calendar"></span>
		                    </span>
		                </div>
	  				</div>
	  				<button type="button" ng-click="filtrarOrdensDeServicoPorFiltro()" class="btn btn-primary" style="margin-top: 25px;">Filtrar</button>
				</div>
			</div>
		</div>
	</div>


	<div class="row" ng-controller="GerenciadorDeServicosController">
		<div class="col-md-12">
			<div class="panel panel-primary">
				<div class="panel-heading" style="text-align: right;">
					<label style="float: left; margin-top: 7px;"> Agendamentos </label>
					<button type="button" ng-click="novaOrdemDeServico()" class="btn btn-default" style="margin-left: 80%;">Nova Ordem de Serviço</button>
				</div>
				<div class="panel-body">
					<table id="tableOrdemDeServico" data-sort-name="nome">
						<thead>
							<tr>
								<th data-field="dataDeCadastro" data-formatter="dataConverterFormatter">Data de Cadastro</th>
								<th data-field="dataDeAgendamento" data-formatter="dataConverterFormatter">Agendada para</th>
								<th data-field="cliente.nome">Cliente</th>
								<th data-field="dataDeExecucao" data-formatter="dataConverterFormatter">Executada</th>
								<th data-field="operate" data-formatter="operateFormatterPadrao" data-events="operateEventsGerenciadorDeServicos">Ação</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>