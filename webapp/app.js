(function(){
    var component = new Object();

    function createComponent( name ){
        component[name] = component[name]|| new sap.ui.core.ComponentContainer({
            height: "100%",
            name: name
        });
        return component[name];
    }

    sap.ui.getCore().attachInit(function(){
        jQuery.sap.require("sap.ui.model.json.JSONModel");
        var model = new sap.ui.model.json.JSONModel({
            title: "Mobile Inspection",
            app: "sciener.m.inspection",
            logonUrl: "",
            appUrl:""
        });
        var log = createComponent("sciener.m.logon");
        sap.ui.getCore().setModel(model, "setting");
        var oShell= new sap.m.Shell().setApp(log).placeAt("root");

        var eventBus = sap.ui.getCore().getEventBus();
        eventBus.subscribe("logon", "login", function(){
            oShell.setApp(createComponent("sciener.m.inspection")).placeAt("root");
        }, this);
        eventBus.subscribe("logon", "logout", function(){
            oShell.setApp(log).placeAt("root");
        }, this);
    });


})();