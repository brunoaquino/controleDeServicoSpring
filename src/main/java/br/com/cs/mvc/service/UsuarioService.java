package br.com.cs.mvc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.cs.mvc.model.Usuario;
import br.com.cs.mvc.repositories.UsuarioRepository;

@Service
public class UsuarioService extends ServicoBase {

	public List<Usuario> getAllUsers() {
		UsuarioRepository repository = getRepositorio(UsuarioRepository.class);
		return repository.getAllUsers();
	}

}
