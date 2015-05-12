jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
jQuery.sap.require("sap.ui.core.routing.Router");
jQuery.sap.declare("sciener.m.inspection.Router");

sap.ui.core.routing.Router.extend("sciener.mobile.inspection.Router", {

    constructor : function() {
        "use strict";
        sap.ui.core.routing.Router.apply(this, arguments);
        this._oRouteMatchedHandler = new sap.m.routing.RouteMatchedHandler(this);
    },

    destroy : function() {
        "use strict";
        sap.ui.core.routing.Router.prototype.destroy.apply(this, arguments);
        this._oRouteMatchedHandler.destroy();
    }

});