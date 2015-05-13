sap.ui.jsview('sciener.m.inspection.view.OrderList',{
    getControllerName: function(){
        'use strict';
        return 'sciener.m.inspection.view.OrderList';
    },

    createContent: function(oController){
        'use strict';
        var oOrderListTemplates = new sap.m.ObjectListItem({

        });

        var oOrderList = new sap.m.List({
            items: {
                path: 'inspection>/OrderSet',
                template: oOrderListTemplates
            },
            select:[oController.handleSelectOrder, oController]
        });

        var oMenuButton = new sap.m.Button({
            icon: "sap-icon://menu2",
            press: [oController.handleShowMainActionSheet,oController]
        });

        var oFooter = new sap.m.Bar({
            contentLeft: [
                oMenuButton,
                new sap.m.Button("idUpload",{
                    icon: "sap-icon://alert"
                }),
                new sap.m.Button("idLogout",{
                    icon: "sap-icon://log",
                    press: [oController.handleLogout,oController]
                })
            ]
        });



        var oOrderListHeader = new sap.m.Bar({
            contentMiddle: [

                new sap.m.SearchField()

            ],
            contentRight:[
                new sap.m.Button("idBarcode",{
                    icon: "sap-icon://bar-code"
                })

            ]
        });


        var oOrderListPage = new sap.m.Page("idOrderListPage", {
            customHeader: oOrderListHeader,
            content: [
                oOrderList
            ],
            footer: oFooter
        });


        return oOrderListPage;
    }
});