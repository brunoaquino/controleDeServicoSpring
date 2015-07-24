package br.com.cs.mvc.conf;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import br.com.cs.mvc.repositories.FabricaDeRepositorios;
import br.com.cs.mvc.repositories.FabricaDeRepositoriosFactory;
import br.com.cs.mvc.repositories.UsuarioRepository;
import br.com.cs.mvc.repositories.UsuarioRepositoryHibernate;

@Configuration
public class RepositoriosConfiguration {
	
	@Bean(name = "usuarioRepository")
	public UsuarioRepository getUsuarioRepository() {
		return new UsuarioRepositoryHibernate();
	}

	@Bean(name = "fabricaDeRepositorios")
	public FabricaDeRepositorios getFabricaDeRepositorios() {
		return new FabricaDeRepositoriosFactory();
	}

}
