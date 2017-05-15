window.org_vaadin_felype_cylindercomponent_Cylinder =
function() {
  var cylinder = new shape.Cylinder(this.getElement());

  this.onStateChange = function() {
    cylinder.setFill(this.getState().percent);
    cylinder.setWidth(this.getState().widthD);
    cylinder.setHeight(this.getState().heightD);
  };

};
