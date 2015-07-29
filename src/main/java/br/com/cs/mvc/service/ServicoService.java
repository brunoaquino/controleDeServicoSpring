package br.com.cs.mvc.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import br.com.cs.mvc.model.Servico;
import br.com.cs.mvc.repositories.ServicoRepository;

@Service
public class ServicoService extends ServicoBase {

	@Resource(name = "servicoRepository")
	public ServicoRepository servicoRepository;


	public void salva(Servico servico) {
		servicoRepository.salva(servico);
	}

	public void atualiza(Servico servico) {
		servicoRepository.atualiza(servico);
	}

	public List<Servico> getServicos() {
		return servicoRepository.getServicos();
	}

	public void delete(Servico servico) {
		servicoRepository.exclui(servico);
	}

}
