sap.ui.controller('sciener.m.logon.view.SignIn',{
    onInit: function(){
        "use strict";
    },
    onBeforeRendering: function(){
        "use strict";
    },

    onAfterRendering: function(){
        "use strict";
    },

    onExit: function(){
        "use strict";
    },

    handleLogon: function(oEvent){
        "use strict";
        var eventBus = sap.ui.getCore().getEventBus();
        eventBus.publish("logon", "login");
    },

    handleSettingNav: function(oEvent){
        sap.ui.core.UIComponent.getRouterFor(this).navTo("setting",{});
    }
});