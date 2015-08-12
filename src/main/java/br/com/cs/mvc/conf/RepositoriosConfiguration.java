package br.com.cs.mvc.conf;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import br.com.cs.mvc.repositories.ClienteRepository;
import br.com.cs.mvc.repositories.ClienteRepositoryHibernate;
import br.com.cs.mvc.repositories.FabricaDeRepositorios;
import br.com.cs.mvc.repositories.FabricaDeRepositoriosFactory;
import br.com.cs.mvc.repositories.FuncionarioRepository;
import br.com.cs.mvc.repositories.FuncionarioRepositoryHibernate;
import br.com.cs.mvc.repositories.OSRepository;
import br.com.cs.mvc.repositories.OSRepositoryHibernate;
import br.com.cs.mvc.repositories.ServicoRepository;
import br.com.cs.mvc.repositories.ServicoRepositoryHibernate;
import br.com.cs.mvc.repositories.UsuarioRepository;
import br.com.cs.mvc.repositories.UsuarioRepositoryHibernate;

@Configuration
public class RepositoriosConfiguration {

	@Bean(name = "usuarioRepository")
	public UsuarioRepository getUsuarioRepository() {
		return new UsuarioRepositoryHibernate();
	}

	@Bean(name = "fabricaDeRepositoriosFactory")
	public FabricaDeRepositorios getFabricaDeRepositorios() {
		return new FabricaDeRepositoriosFactory();
	}

	@Bean(name = "servicoRepository")
	public ServicoRepository getServicoRepository() {
		return new ServicoRepositoryHibernate();
	}

	@Bean(name = "FuncionarioRepository")
	public FuncionarioRepository getFuncionarioRepository() {
		return new FuncionarioRepositoryHibernate();
	}

	@Bean(name = "ClienteRepository")
	public ClienteRepository getClienteRepository() {
		return new ClienteRepositoryHibernate();
	}

	@Bean(name = "OrdemDeServicoRepository")
	public OSRepository getOrdemDeServicoRepository() {
		return new OSRepositoryHibernate();
	}

}
