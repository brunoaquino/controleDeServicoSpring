package br.com.cs.mvc.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import br.com.cs.mvc.model.Funcionario;
import br.com.cs.mvc.repositories.FuncionarioRepository;

@Service
public class FuncionarioService extends ServicoBase {

	@Resource(name = "FuncionarioRepository")
	public FuncionarioRepository funcionarioRepository;

	public void salva(Funcionario funcionario) {
		funcionarioRepository.salva(funcionario);
	}

	public void atualiza(Funcionario funcionario) {
		funcionarioRepository.atualiza(funcionario);
	}

	public List<Funcionario> getServicos() {
		return funcionarioRepository.getFuncionarios();
	}

	public void delete(Funcionario funcionario) {
		funcionarioRepository.exclui(funcionario);
	}

}
