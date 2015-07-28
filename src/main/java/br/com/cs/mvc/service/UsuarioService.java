package br.com.cs.mvc.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.cs.mvc.exeptions.ExcecaoUsuarioNaoAutenticado;
import br.com.cs.mvc.exeptions.MensagemDeErroExeption;
import br.com.cs.mvc.infra.Autenticador;
import br.com.cs.mvc.model.Usuario;
import br.com.cs.mvc.repositories.UsuarioRepository;

@Service
public class UsuarioService extends ServicoBase {

	@Resource(name = "usuarioRepository")
	public UsuarioRepository usuarioRepository;

	@Autowired
	Autenticador autenticador;

	public Usuario autenticaUsuario(Usuario usuario) {
		Usuario usuarioAutenticado = usuarioRepository
				.getUsuarioPeloLoginESenha(usuario);
		if (usuarioAutenticado == null) {
			throw new ExcecaoUsuarioNaoAutenticado("Login ou Senha inv�lido");
		} else {
			autenticador.autenticaUsuarioNaSessao(usuarioAutenticado);
			return usuarioAutenticado;
		}
	}

	public void logout() {
		autenticador.removeUsuarioNaSessao();
	}

	public void salva(Usuario usuario) {
		validaUsuario(usuario);
		
		usuario.setAtivo(true);
		usuarioRepository.salvar(usuario);
		
	}
	
	public List<Usuario> getUsuarios() {
		return usuarioRepository.getUsuarios();
	}

	private void validaUsuario(Usuario usuario) {
		Usuario usuarioEncontrado;
		
		usuarioEncontrado = usuarioRepository.getUsuarioPorEmail(usuario.getEmail());
		
		if(usuarioEncontrado != null){
			throw new MensagemDeErroExeption("Usu�rio com o email: '"+usuario.getEmail()+"' j� foi cadastrado");
		}
		
		usuarioEncontrado = usuarioRepository.getUsuarioPorLogin(usuario.getLogin());
		
		if(usuarioEncontrado != null){
			throw new MensagemDeErroExeption("Usu�rio com o login: '"+usuario.getLogin()+"' j� foi cadastrado");
		}
	}

	public void atualiza(Usuario usuario) {
		validaUsuario(usuario);
		usuarioRepository.salvar(usuario);
	}

	public void delete(Usuario usuario) {
		usuarioRepository.salvar(usuario);
	}

}
