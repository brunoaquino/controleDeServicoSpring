package br.com.cs.mvc.aplicacao;

import javax.annotation.Resource;

import br.com.cs.mvc.repositories.FabricaDeRepositorios;
import br.com.cs.mvc.repositories.Repositorio;

public class Aplicacao {

	private static Aplicacao instancia;

	@Resource(name = "fabricaDeRepositorios")
	private FabricaDeRepositorios fabricaDeRepositorios;

	public static Aplicacao get() {
		return instancia;
	}

	@SuppressWarnings("unchecked")
	public <T extends Repositorio> T getRepositorio(Class<? extends Repositorio> interfaceDoRepositorio) {
		return (T) fabricaDeRepositorios.getRepositorio(interfaceDoRepositorio);
	}

}
