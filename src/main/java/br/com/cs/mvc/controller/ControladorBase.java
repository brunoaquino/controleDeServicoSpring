package br.com.cs.mvc.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import br.com.cs.mvc.exeptions.ExcecaoInfraestrutura;
import br.com.cs.mvc.exeptions.ExcecaoUsuarioNaoAutenticado;
import br.com.cs.mvc.model.Erro;

public class ControladorBase {
	
	@Autowired
	protected HttpServletRequest request;
	
	private static final String USUARIO_LOGADO = "UsuarioLogado";
	
	@ExceptionHandler(value = { ExcecaoUsuarioNaoAutenticado.class })
	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	public @ResponseBody Erro capturaExcecaoUsuarioNaoAutenticado(ExcecaoUsuarioNaoAutenticado ex, HttpServletRequest request) {
		ex.printStackTrace();
		
		Erro erro = new Erro();
		erro.setId(2);
		erro.setMensagemDeErro(ex.getMessage());
		return erro;
	}
	@ExceptionHandler(value = { ExcecaoInfraestrutura.class })
	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	public @ResponseBody
	Erro capturaExcecaoInfraestrutura(ExcecaoInfraestrutura ex, HttpServletRequest request) {
		ex.printStackTrace();
		
		Erro erro = new Erro();
		erro.setId(1);
		erro.setMensagemDeErro(ex.getMessage());
		return erro;
	}

}
