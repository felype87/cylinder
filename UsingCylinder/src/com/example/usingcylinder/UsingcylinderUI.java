package com.example.usingcylinder;

import javax.servlet.annotation.WebServlet;

import org.vaadin.felype.cylindercomponent.Cylinder;

import com.vaadin.annotations.Theme;
import com.vaadin.annotations.VaadinServletConfiguration;
import com.vaadin.server.VaadinRequest;
import com.vaadin.server.VaadinServlet;
import com.vaadin.ui.UI;
import com.vaadin.ui.VerticalLayout;

@SuppressWarnings("serial")
@Theme("usingcylinder")
public class UsingcylinderUI extends UI {

	@WebServlet(value = "/*", asyncSupported = true)
	@VaadinServletConfiguration(productionMode = false, ui = UsingcylinderUI.class, widgetset = "com.example.usingcylinder.widgetset.UsingcylinderWidgetset")
	public static class Servlet extends VaadinServlet {
	}

	@Override
	protected void init(VaadinRequest request) {
		final VerticalLayout layout = new VerticalLayout();

		layout.setMargin(true);
		setContent(layout);

		Cylinder cylinder = new Cylinder();

		cylinder.setFill(0.5);
		cylinder.setHeight(200);
		cylinder.setWidth(100);

		layout.addComponent(cylinder);
	}

}