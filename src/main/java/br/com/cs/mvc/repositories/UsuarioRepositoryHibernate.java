package br.com.cs.mvc.repositories;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import br.com.cs.mvc.model.Usuario;

@Repository
public class UsuarioRepositoryHibernate extends RepositoryBase implements
		UsuarioRepository {

	@Override
	public List<Usuario> getAllUsers() {
		return this.hibernateTemplate.loadAll(Usuario.class);
	}

	// não esquecer de fechar a sessao sempre que fiser alguma transacao

	@Override
	public Usuario getUsuarioPeloLoginESenha(Usuario usuario) {
		Session sessao = getSession();

		Criteria criteria = sessao.createCriteria(Usuario.class);
		criteria.add(Restrictions.eq("email", usuario.getEmail()));
		criteria.add(Restrictions.eq("senha", usuario.getSenha()));

		Usuario usuarioAutenticado = (Usuario) criteria.uniqueResult();
		sessao.close();

		return usuarioAutenticado;
	}
	
}
