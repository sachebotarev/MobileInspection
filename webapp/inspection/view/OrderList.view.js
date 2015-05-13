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


        var oFooter = new sap.m.Bar({

        });


        var oOrderListPage = sap.m.Page("idOrderListPage", {
            title: "{i18n>TITLE_ORDER_LIST}",
            content: [
                oOrderList
            ],
            footer: oFooter
        });


        return oOrderListPage;
    }
});