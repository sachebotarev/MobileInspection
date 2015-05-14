sap.ui.jsview('sciener.m.inspection.view.Home', {
    getControllerName: function () {
        "use strict";
        return 'sciener.m.inspection.view.Home';
    },

    createContent: function (oController) {
        "use strict";
        this.setDisplayBlock(true);
        var oUserButton = new sap.m.Button(this.createId("idHomeUserButton"),{
            text: "User",
            icon: "sap-icon://employee",
            press: [oController.handleShowUserInfo, oController]
        });
        var oAppNameText = new sap.m.Label({
            text: "{i18n>TITLE_APPLICATION_NAME}"
        });
        var oHeader = new sap.m.Bar(this.createId("idHomeHeader"),{
            contentRight: [
                oUserButton
            ],
            contentMiddle:[
                oAppNameText
            ]
        });
        var oFooter = new  sap.m.Bar(this.createId("idHomeFooter"), {});
        var oPage =  new sap.m.Page(this.createId("idHomePage"), {

            customHeader: oHeader,
            footer: oFooter,
            content:[]
        });
        return oPage;
    }
});