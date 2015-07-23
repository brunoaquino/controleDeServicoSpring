package br.com.cs.mvc.filtro;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

@Component
public class AutorizadorInterceptor extends HandlerInterceptorAdapter {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object controller) throws Exception {

		if (request.getSession().getAttribute("usuarioLogado") != null) {
			return true;
		}

		response.sendRedirect("login.jsp");
		return false;
	}
}
