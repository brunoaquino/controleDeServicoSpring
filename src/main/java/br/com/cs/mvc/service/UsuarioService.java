package br.com.cs.mvc.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.cs.mvc.exeptions.ExcecaoUsuarioNaoAutenticado;
import br.com.cs.mvc.infra.Autenticador;
import br.com.cs.mvc.model.Usuario;
import br.com.cs.mvc.repositories.UsuarioRepository;

@Service
public class UsuarioService extends ServicoBase {
	
	@Resource(name="usuarioRepository")
	public UsuarioRepository usuarioRepository;
	
	@Autowired
	Autenticador autenticador;
	
	public List<Usuario> getAllUsers() {
		return usuarioRepository.getAllUsers();
	}

	public Usuario autenticaUsuario(Usuario usuario) {
		Usuario usuarioAutenticado = usuarioRepository.getUsuarioPeloLoginESenha(usuario);
		if(usuarioAutenticado == null){
			throw new ExcecaoUsuarioNaoAutenticado("Login ou Senha inválido");
		}else{
			autenticador.autenticaUsuarioNaSessao(usuarioAutenticado);
			return usuarioAutenticado;
		}
	}
	

}
