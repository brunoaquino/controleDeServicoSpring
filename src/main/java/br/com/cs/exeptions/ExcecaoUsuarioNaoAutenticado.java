package br.com.cs.exeptions;

public class ExcecaoUsuarioNaoAutenticado extends RuntimeException {

	private static final long serialVersionUID = -618210585197817999L;

	public ExcecaoUsuarioNaoAutenticado(String mensagem) {
		super(mensagem);
	}

	public ExcecaoUsuarioNaoAutenticado(String mensagem, Throwable e) {
		super(e);
	}

}
