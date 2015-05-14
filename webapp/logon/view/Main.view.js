sap.ui.jsview('sciener.m.logon.view.Main',{
    getControllerName: function(){
        "use strict";
        return 'sciener.m.logon.view.Main';
    },

    createContent: function(oController){
        "use strict";
        return new sap.m.App(this.createId("idLogonApp"));
    }
});