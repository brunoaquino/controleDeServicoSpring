package br.com.cs.mvc.repositories;

import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class FabricaDeRepositoriosFactory extends FabricaDeRepositorios {

//	@Resource(name="usuarioRepository")
	public UsuarioRepository usuarioRepository;
	
	@Override
	protected void doPopulaDefinicoesDeRepositorio(Map<Class<? extends Repositorio>, Repositorio> definicoesDosRepositorios) {
		definicoesDosRepositorios.put(UsuarioRepository.class, usuarioRepository);
	}

}
