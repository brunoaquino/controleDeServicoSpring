package br.com.cs.mvc.repositories;

import java.util.List;

import br.com.cs.mvc.model.Usuario;

public interface UsuarioRepository extends Repositorio{

	public List<Usuario> getAllUsers();
}
