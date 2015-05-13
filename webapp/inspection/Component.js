jQuery.sap.declare("sciener.m.inspection.Component");
jQuery.sap.require("sap.ui.core.util.MockServer");

sap.ui.core.UIComponent.extend("sciener.m.inspection.Component", {
    metadata: {
        name: "Mobile Inspection",
        version: "1.0.0",
        includes: ["css/styles.css"],
        dependencies: {
            libs: ["sap.m"]
        },
        routing:{
            config:{
                viewType : "JS",
                viewPath : "sciener.m.inspection.view",
                targetAggregation : "detailPages",
                clearTarget : false
            },
            routes:[
                {
                    name: "orderList",
                    pattern: "",
                    view: "OrderList",
                    targetControl: "idMainSplitApp",
                    targetAggregation: "masterPages",
                    subroutes:[
                        {
                            name: "homePage",
                            pattern: "",
                            view: "Home"
                        },
                        {
                            name: "orderDetails",
                            pattern:"order/{orderId}",
                            view: "OrderDetails"
                        }
                    ]
                },
                {
                    name: "objectList",
                    pattern: "order/{orderId}/object",
                    view: "ObjectList",
                    targetControl: "idMainSplitApp",
                    targetAggregation: "masterPages",
                    subroutes:[
                        {
                            name: "orderDetails",
                            pattern:"order/{orderId}/object/{objectId}",
                            view: "OrderDetails"
                        }
                    ]
                }
            ]
        }
    }

});

sciener.m.inspection.Component.prototype.init = function() {
    "use strict";
    var i18nModel;
    sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
    i18nModel = new sap.ui.model.resource.ResourceModel({
       bundleName: "sciener.m.inspection.i18n.messageBundle"
    });
    this.setModel(sap.ui.getCore().getModel("setting"), "setting");
    this.setModel(i18nModel,"i18n");
    this.getRouter().initialize();
};

sciener.m.inspection.Component.prototype.createContent = function(){
    "use strict";
    return sap.ui.view({
        id: "idMainInspectionView",
        type: sap.ui.core.mvc.ViewType.JS,
        viewName: "sciener.m.inspection.view.Main"
    });
};

sciener.m.inspection.Component.prototype.destroy = function(){
    "use strict";
    sap.ui.core.UIComponent.prototype.destroy.apply(this, arguments);
};
