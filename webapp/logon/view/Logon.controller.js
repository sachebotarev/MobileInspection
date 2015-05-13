sap.ui.controller('sciener.m.logon.view.Logon',{
    onInit: function(){

    },
    onBeforeRendering: function(){

    },

    onAfterRendering: function(){

    },

    onExit: function(){

    },

    handleLogon: function(oEvent){
        var eventBus = sap.ui.getCore().getEventBus();
        eventBus.publish("logon", "login");
    }
});