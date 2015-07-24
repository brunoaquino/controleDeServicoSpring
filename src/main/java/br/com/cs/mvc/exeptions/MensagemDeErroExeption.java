package br.com.cs.mvc.exeptions;

public class MensagemDeErroExeption extends RuntimeException {

	private static final long serialVersionUID = -20803418783934913L;

	public MensagemDeErroExeption(String mensagem) {
		super(mensagem);
	}

}
