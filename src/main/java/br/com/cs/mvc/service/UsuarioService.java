package br.com.cs.mvc.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.cs.mvc.exeptions.ExcecaoUsuarioNaoAutenticado;
import br.com.cs.mvc.exeptions.MensagemDeErroExeption;
import br.com.cs.mvc.infra.Autenticador;
import br.com.cs.mvc.model.Usuario;
import br.com.cs.mvc.repositories.ClienteRepository;
import br.com.cs.mvc.repositories.FuncionarioRepository;
import br.com.cs.mvc.repositories.OSRepository;
import br.com.cs.mvc.repositories.UsuarioRepository;

@Service
public class UsuarioService extends ServicoBase {

	@Resource(name = "usuarioRepository")
	public UsuarioRepository usuarioRepository;

	@Resource(name = "OrdemDeServicoRepository")
	public OSRepository osRepository;

	@Resource(name = "FuncionarioRepository")
	public FuncionarioRepository funcionarioRepository;

	@Resource(name = "ClienteRepository")
	public ClienteRepository clienteRepository;

	@Autowired
	Autenticador autenticador;

	public Usuario autenticaUsuario(Usuario usuario) {
		Usuario usuarioAutenticado = usuarioRepository.getUsuarioPeloLoginESenha(usuario);
		if (usuarioAutenticado == null) {
			throw new ExcecaoUsuarioNaoAutenticado("Login ou Senha inv�lido");
		} else {
			autenticador.autenticaUsuarioNaSessao(usuarioAutenticado);
			return usuarioAutenticado;
		}

		// OrdemDeServico os = new OrdemDeServico();
		//
		// Cliente cliente = clienteRepository.get(1);
		//
		// Funcionario funcionario = funcionarioRepository.get(2);
		//
		// os.setDataDeCadastro(new Date());
		// os.setDataDeAlteracao(new Date());
		// os.setDataDeAgendamento(new Date());
		//
		// os.setCliente(cliente);
		// os.setFuncionario(funcionario);
		//
		//
		// osRepository.salva(os);

		// return new Usuario();
	}

	public void logout() {
		autenticador.removeUsuarioNaSessao();
	}

	public void salva(Usuario usuario) {
		validaUsuarioSalvar(usuario);

		if (usuario.getId() == null) {
			usuario.setAtivo(true);
		}
		usuarioRepository.salva(usuario);
	}

	public void atualiza(Usuario usuario) {
		validaUsuarioAtualiza(usuario);

		usuarioRepository.atualiza(usuario);
	}

	public List<Usuario> getUsuarios() {
		return usuarioRepository.getUsuarios();
	}

	private void validaUsuarioSalvar(Usuario usuario) {
		Usuario usuarioEncontrado;

		usuarioEncontrado = usuarioRepository.getUsuarioPorEmail(usuario
				.getEmail());

		if (usuarioEncontrado != null) {
			throw new MensagemDeErroExeption("Usu�rio com o email: '"
					+ usuario.getEmail() + "' j� foi cadastrado");
		}

		usuarioEncontrado = usuarioRepository.getUsuarioPorLogin(usuario
				.getLogin());

		if (usuarioEncontrado != null) {
			throw new MensagemDeErroExeption("Usu�rio com o login: '"
					+ usuario.getLogin() + "' j� foi cadastrado");
		}
	}

	private void validaUsuarioAtualiza(Usuario usuario) {
		List<Usuario> usuariosEncontrados;

		usuariosEncontrados = usuarioRepository.getUsuariosPorEmail(usuario
				.getEmail());

		if (usuariosEncontrados.size() > 1) {
			throw new MensagemDeErroExeption("Usu�rio com o email: '"
					+ usuario.getEmail() + "' j� foi cadastrado");
		}

		usuariosEncontrados = usuarioRepository.getUsuariosPorLogin(usuario
				.getLogin());

		if (usuariosEncontrados.size() > 1) {
			throw new MensagemDeErroExeption("Usu�rio com o login: '"
					+ usuario.getLogin() + "' j� foi cadastrado");
		}
	}

	public void delete(Usuario usuario) {
		usuarioRepository.exclui(usuario);
	}

}
