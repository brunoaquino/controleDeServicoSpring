package br.com.cs.mvc.repositories;

import java.util.List;

import org.springframework.stereotype.Repository;

import br.com.cs.mvc.model.OrdemDeServico;

@Repository
public class OSRepositoryHibernate extends RepositoryBase implements
		OSRepository {

	@Override
	public List<OrdemDeServico> getOrdemDeServicos() {
		return this.hibernateTemplate.loadAll(OrdemDeServico.class);
	}

	@Override
	public void salva(OrdemDeServico os) {
		this.hibernateTemplate.save(os);
	}

	@Override
	public void atualiza(OrdemDeServico os) {
		this.hibernateTemplate.update(os);
	}

	@Override
	public void exclui(OrdemDeServico os) {
		this.hibernateTemplate.delete(os);
	}

}
