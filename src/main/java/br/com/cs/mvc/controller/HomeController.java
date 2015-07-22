package br.com.cs.mvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	public Usuario index(Usuario usuario) {
		try {
			Usuario usuario2 = null;
			usuario2.setAtivo(true);
		} catch (Exception e) {
			try {
				throw new Exception("erro");
			} catch (Exception e1) {
				e1.printStackTrace();
			}
		}
		return usuario;
	}

}
