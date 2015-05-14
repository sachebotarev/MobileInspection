sap.ui.controller('sciener.m.logon.view.Setting',{
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

    handleBack: function(oEvent){
        sap.ui.core.UIComponent.getRouterFor(this).navTo("logon",{});
    }
});