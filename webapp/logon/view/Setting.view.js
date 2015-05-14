sap.ui.jsview('sciener.m.logon.view.Setting',{
    getControllerName: function(){
        'use strict';
        return 'sciener.m.logon.view.Setting';
    },

    createContent: function(oController){
        'use strict';

        var oLogonUrl = new sap.m.Input({
           value: "{setting>/logonUrl}"
        });

        var oAppName = new sap.m.Input({
            value: "{setting>/app}",
            enabled: false,
            type: "Text"
        });

        var oAppUrl = new sap.m.Input({
            value: "{setting>/appUrl}",
            enabled: false,
            type: "Text"
        });
        var oBackBtn = new sap.m.Button({
            icon: "sap-icon://nav-back",
           press: [oController.handleBack, oController]
        });

        var oTitleLb = new sap.m.Label({
           text: "Settings"
        });
        var oHeader = new sap.m.Bar({
            contentLeft: [
                oBackBtn
            ],
            contentMiddle: [
                oTitleLb
            ]
        });

        var oLable1 = new sap.m.Label({
            text: "Logon URL",
            labelFor: oLogonUrl
        });
        var oLable2 = new sap.m.Label({
            text: "Application URL",
            labelFor: oAppUrl
        });

        var oLable3 = new sap.m.Label({
            text: "Application",
            labelFor: oAppName
        });

        var oSaveBtn = new sap.m.Button({
            text: "Save"
        });

        var oForm = sap.ui.layout.Grid({
           defaultSpan: "L12 M12 S12",
           content: [
               new sap.ui.layout.form.SimpleForm({
                   editable: true,
                   labelSpanL: 3,
                   labelSpanM: 3,
                   emptySpanL: 4,
                   emptySpanM: 4,
                   columnsL: 2,
                   columnsM: 2,
                   title: "Main",
                   layout: "ResponsiveGridLayout",
                   maxContainerCols: 2,
                   content: [
                       oLable3,
                       oAppName,
                       oLable2,
                       oAppUrl,
                       oLable1,
                       oLogonUrl
                       //oSaveBtn
                   ]
               })
           ]
        });
        var oPage =  new sap.m.Page({
            customHeader: oHeader,
            content: [oForm]
        });
        return oPage;
    }
});