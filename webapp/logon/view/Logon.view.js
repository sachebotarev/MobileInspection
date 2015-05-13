sap.ui.jsview('sciener.m.logon.view.Logon',{
    getControllerName: function(){
        'use strict';
        return 'sciener.m.logon.view.Logon';
    },

    createContent: function(oController){
        'use strict';
        var oFooter =  new sap.m.Bar("idLogonFooter", {
            contentLeft:[
                new sap.m.Button({
                    icon: "sap-icon://settings"
                })
            ],
            contentRight:[
                new sap.m.Image({
                    src: "logon/img/logo.png"
                })
            ]
        });
        var oInput =  new sap.m.Input({
            type: "Text"

        });
        var oPage =  new sap.m.Page({
            title: "{setting>/title}",
            content: [
                new sap.m.Button("idLogonButton",{
                    text: "Logon",
                    press: [oController.handleLogon, oController]
                }),
                new sap.m.Input({
                    type: "Text"

                })
            ],
            footer: oFooter
        });
        return oPage;
    }
});