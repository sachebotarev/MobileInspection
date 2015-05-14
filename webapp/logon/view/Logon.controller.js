sap.ui.controller('sciener.m.logon.view.Logon',{
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
    }
});