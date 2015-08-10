package br.com.cs.mvc.conf;

import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

import br.com.cs.mvc.filtro.FiltroRequisicao;

public class WebAppInitializer implements WebApplicationInitializer {

	@Override
	public void onStartup(ServletContext container) throws ServletException {
		AnnotationConfigWebApplicationContext rootContext = new AnnotationConfigWebApplicationContext();
		rootContext.getEnvironment().setDefaultProfiles("production");
		rootContext.scan("br.com.cs.mvc.conf");

		container.addListener(new ContextLoaderListener(rootContext));

		FilterRegistration.Dynamic fr = container.addFilter("FiltroRequisicao",new FiltroRequisicao());

		fr.setInitParameter("encoding", "UTF-8");
		fr.setInitParameter("forceEncoding", "true");
		fr.addMappingForUrlPatterns(null, true, "/*");

		ServletRegistration.Dynamic servlet = container.addServlet("DispatcherServlet", DispatcherServlet.class);
		servlet.setInitParameter("contextConfigLocation", "");
		servlet.setLoadOnStartup(1);
		servlet.addMapping("/");
	}

}
