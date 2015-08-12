package br.com.cs.mvc.repositories;

import java.util.List;

import br.com.cs.mvc.model.OrdemDeServico;

public interface OSRepository extends Repositorio {

	public List<OrdemDeServico> getOrdemDeServicos();

	public void salva(OrdemDeServico os);

	public void atualiza(OrdemDeServico os);

	public void exclui(OrdemDeServico os);
}
