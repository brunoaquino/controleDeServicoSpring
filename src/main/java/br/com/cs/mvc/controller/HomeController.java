package br.com.cs.mvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.cs.mvc.model.Usuario;
import br.com.cs.mvc.service.UsuarioService;

@RestController
@RequestMapping("/home")
public class HomeController {

	@Autowired
	UsuarioService service;

	@RequestMapping(value = "/index", method = RequestMethod.POST)
	@Transactional
	public @ResponseBody Usuario index(Usuario usuarios) {
		Usuario usuario = new Usuario();
		usuario.setEmail("bruno.aquino@syncode.com");
		usuario.setSenha("020893");
		return usuario;
	}
}
