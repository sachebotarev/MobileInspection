sap.ui.jsview('sciener.m.inspection.view.OrderDetails',{
    getControllerName: function(){
        "use strict";
        return 'sciener.m.inspection.view.OrderDetails';
    },

    createContent: function(oController){
        "use strict";
        this.setDisplayBlock(true);
        return new sap.m.Button({text: "Order Details"});
    }
});