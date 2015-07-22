package br.com.cs.mvc.repositories;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate4.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.cs.mvc.model.Usuario;

@Transactional
@Repository
public class UsuarioRepository {

	@Autowired
	private HibernateTemplate hibernateTemplate;

	public List<Usuario> getAllUsers() {
		return this.hibernateTemplate.loadAll(Usuario.class);
	}

	// public Integer createUser(Usuario usuario) {
	// Usuario mergeUser = this.hibernateTemplate.merge(usuario);
	// return mergeUser.getId();
	// }
}
