sap.ui.jsview('sciener.m.logon.view.Setting',{
    getControllerName: function(){
        'use strict';
        return 'sciener.m.logon.view.Setting';
    },

    createContent: function(oController){
        'use strict';
        var oPage =  new sap.m.Page({
            title: "Setting"
        });
        return oPage;
    }
});