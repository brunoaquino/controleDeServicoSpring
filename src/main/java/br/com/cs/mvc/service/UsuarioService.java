package br.com.cs.mvc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.cs.mvc.model.Usuario;
import br.com.cs.mvc.repositories.UsuarioRepositoryHibernate;

@Service
public class UsuarioService extends ServicoBase {

	@Autowired
	private UsuarioRepositoryHibernate usuarioRepository;

	public List<Usuario> getAllUsers() {
		return this.usuarioRepository.getAllUsers();
	}

}
