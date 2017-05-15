package org.vaadin.felype.cylindercomponent;

import com.vaadin.annotations.JavaScript;
import com.vaadin.ui.AbstractJavaScriptComponent;

@JavaScript({ "shape.js", "shape-connector.js" })
public class Cylinder extends AbstractJavaScriptComponent {

	public void setFill(double percent) {
		getState().percent = percent;
	}

	public void setWidth(double width) {
		getState().widthD = width;
	}

	public void setHeight(double height) {
		getState().heightD = height;
	}

	@Override
	protected CylinderState getState() {
		return (CylinderState) super.getState();
	}

}
