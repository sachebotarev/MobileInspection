jQuery.sap.declare("sciener.m.logon.Component");
jQuery.sap.require("sap.ui.core.util.MockServer");

sap.ui.core.UIComponent.extend("sciener.m.logon.Component", {
    metadata: {
        name: "Logon",
        version: "1.0.0",
        includes: ["css/styles.css"],
        dependencies: {
            libs: ["sap.m"]
        },
        routing:{
            config:{
                viewType : "JS",
                viewPath : "sciener.m.logon.view",
                targetControl: "idLogonApp",
                targetAggregation : "pages",
                clearTarget : false
            },
            routes:[
                {
                    name: "logon",
                    pattern: "",
                    view: "Logon"

                },
                {
                    name: "setting",
                    pattern: "setting",
                    view: "Setting"
                }
            ]
        }
    }

});

sciener.m.logon.Component.prototype.init = function() {
    "use strict";
    var i18nModel;
    sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
    i18nModel = new sap.ui.model.resource.ResourceModel({
       bundleName: "sciener.m.logon.i18n.messageBundle"
    });

    this.setModel(sap.ui.getCore().getModel("setting"), "setting");
    this.setModel(i18nModel,"i18n");
    this.getRouter().initialize();
};

sciener.m.logon.Component.prototype.createContent = function(){
    "use strict";
    return sap.ui.view({
        id: "idMainLogonView",
        type: sap.ui.core.mvc.ViewType.JS,
        viewName: "sciener.m.logon.view.Main"
    });
};

sciener.m.logon.Component.prototype.destroy = function(){
    "use strict";
    sap.ui.core.UIComponent.prototype.destroy.apply(this, arguments);
};
