package org.vaadin.felype.cylindercomponent;

import javax.servlet.annotation.WebServlet;

import com.vaadin.annotations.Theme;
import com.vaadin.annotations.VaadinServletConfiguration;
import com.vaadin.server.VaadinRequest;
import com.vaadin.server.VaadinServlet;
import com.vaadin.ui.UI;
import com.vaadin.ui.VerticalLayout;

@SuppressWarnings("serial")
@Theme("cylindercomponent")
public class CylindercomponentUI extends UI {

	@WebServlet(value = "/*", asyncSupported = true)
	@VaadinServletConfiguration(productionMode = false, ui = CylindercomponentUI.class)
	public static class Servlet extends VaadinServlet {
	}

	@Override
	protected void init(VaadinRequest request) {
		final VerticalLayout layout = new VerticalLayout();

		layout.setMargin(true);
		setContent(layout);

		Cylinder cylinder = new Cylinder();

		cylinder.setFill(0.8);
		cylinder.setHeight(200);
		cylinder.setWidth(100);

		layout.addComponent(cylinder);
	}

}