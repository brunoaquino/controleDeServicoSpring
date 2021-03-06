package br.com.cs.mvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.cs.mvc.model.Usuario;
import br.com.cs.mvc.service.UsuarioService;

@RestController
@RequestMapping("/rest/autenticacao")
public class ControladorAutenticacao extends ControladorBase {

	@Autowired
	UsuarioService service;
	
	@RequestMapping(value = "/autentica", method = RequestMethod.POST)
	@Transactional
	public Usuario autentica(Usuario usuario) {
		service.autenticaUsuario(usuario);
		return usuario;
	}
	@RequestMapping(value = "/logout", method = RequestMethod.POST)
	public boolean logout() {
		service.logout();
		return true;
	}
}
