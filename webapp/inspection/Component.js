jQuery.sap.declare("sciener.m.inspection.Component");
jQuery.sap.require("sap.ui.core.util.MockServer");

sap.ui.core.UIComponent.extend('sciener.m.inspection.Component', {
    metadata: {
        name: 'Mobile Inspection',
        version: '1.0.0',
        includes: ['css/styles.css'],
        dependencies: {
            libs: ['sap.m']
        }
    }

});

sciener.m.inspection.Component.prototype.init = function() {
    "use strict";
};

sciener.m.inspection.Component.prototype.createContent = function(){
    "use strict";
};

sciener.mobile.inspection.Component.prototype.destroy = function(){
    "use strict";
    sap.ui.core.UIComponent.prototype.destroy.apply(this, arguments);
};
