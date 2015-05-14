sap.ui.jsview('sciener.m.logon.view.Logon',{
    getControllerName: function(){
        "use strict";
        return 'sciener.m.logon.view.Logon';
    },

    createContent: function(oController){
        "use strict";

        var oLoginInp =  new sap.m.Input(this.createId("idLoginInput"),{
            width : "22rem",
            valueLiveUpdate: true,
            maxLength: 12,
            minLength: 6
        });

        var oLoginLb =  new sap.m.Label(this.createId("oLoginLb"), {
            width : "22rem",
            text: "{i18n>TEXT_LOGIN_LABEL}",
            //required: true,
            labelFor: oLoginInp
        });
        var oPasswordInp =  new sap.m.Input(this.createId("idPasswordInput"),{
            width : "22rem",
            minLength: 6,
            type: sap.m.InputType.Password,
            valueLiveUpdate: true
        });

        var oPasswordLb =  new sap.m.Label(this.createId("oPasswordLb"), {
            width : "22rem",
            text: "{i18n>TEXT_PASSWORD_LABEL}",
            //required: true,
            labelFor: oPasswordInp
        });

        var oSettingBtn = new sap.m.Button(this.createId("idSettingButton"),{
            icon: "sap-icon://settings",
            press: [oController.handleSettingNav, oController]
        });

        var oLogoImg = new sap.m.Image("idSettingButton",{
            src: "logon/img/logo.png"
        });

        var oLoginBtn = new sap.m.Button(this.createId("idLobotButton"),{
            width : "11rem",
            text: "{i18n>TEXT_SIGNIN_BUTTON}",
            press: [oController.handleLogon, oController]
        });
        var oFooter =  new sap.m.Bar("idFooter", {
            contentLeft:[
                oSettingBtn
            ],
            contentRight:[
                oLogoImg
            ]
        });

        var oSignInBtnFlexContainer = new sap.m.FlexBox(this.createId("idSignInBtnFlexContainer"), {
            width : "22rem",
            direction: sap.m.FlexDirection.Row,
            justifyContent : sap.m.FlexJustifyContent.Start,
            alignItems: sap.m.FlexAlignItems.Start,
            items:[ oLoginBtn ]
        });

        var oColumnFlex = new sap.m.FlexBox(this.createId("idColumnFlex"), {
            direction: sap.m.FlexDirection.Column,
            justifyContent : sap.m.FlexJustifyContent.Center,
            alignItems: sap.m.FlexAlignItems.Center,
            items:[
                oLoginLb,
                oLoginInp,
                oPasswordLb,
                oPasswordInp,
                oSignInBtnFlexContainer,
                oSignInBtnFlexContainer
            ]
        });

        var txLogon =  new sap.m.Text({
            textAlign: sap.ui.core.TextAlign.Center,
            text: "{i18n>TITLE_SIGNIN_PANEL}"
        });

         var tbLogon = new sap.m.Toolbar({
                design: sap.m.ToolbarDesign.Auto ,
                content:[txLogon]
            });

        var oPanel = new sap.m.Panel({
            content: oColumnFlex,
            //design: sap.m.ToolbarDesign.Transparent,
            infoToolbar : tbLogon
        });

        var oRowFlex = new sap.m.FlexBox(this.createId("idRowFlex"), {
                fitContainer: true,
                direction: sap.m.FlexDirection.Row,
                justifyContent : sap.m.FlexJustifyContent.Center,
                alignItems: sap.m.FlexAlignItems.Center,
                items:[ oPanel ]
            });

        var oPage =  new sap.m.Page({
            title: "{setting>/title}",
            content: [
                oRowFlex
            ],
            footer: oFooter
        });
        return oPage;
    }
});