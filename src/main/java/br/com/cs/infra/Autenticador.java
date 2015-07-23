package br.com.cs.infra;

import br.com.cs.exeptions.ExcecaoUsuarioNaoAutenticado;

public class Autenticador {
	private static Autenticador instancia;
	private ThreadLocal<UsuarioBase> usuarios;

	public static Autenticador getInstancia() {
		if (instancia == null) {
			synchronized (Autenticador.class) {
				if (instancia == null) {
					instancia = new Autenticador();
				}
			}
		}
		return instancia;
	}

	public UsuarioBase getUsuarioDaRequisicaoCorrente() {
		if (usuarios == null || usuarios.get() == null) {
			throw new ExcecaoUsuarioNaoAutenticado(
					"O usu�rio da requisi��o ainda n�o foi registrado.");
		}

		return usuarios.get();
	}

	public void registraUsuario(UsuarioBase usuario) {
		if (usuarios == null) {
			synchronized (getInstancia()) {
				if (usuarios == null) {
					usuarios = new ThreadLocal<UsuarioBase>();
				}
			}
		}
		usuarios.set(usuario);
	}

	public void cancelaRegistroDeUsuario() {
		if (usuarios != null)
			usuarios.remove();
	}
}