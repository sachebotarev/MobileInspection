sap.ui.controller('sciener.m.inspection.view.OrderList',{
    onInit: function(){

    },
    onBeforeRendering: function(){

    },

    onAfterRendering: function(){

    },

    onExit: function(){

    },

    handleShowMainActionSheet: function(oEvent){
        "use strict";
        var oButton = oEvent.getSource();
        // create action sheet only once
        if (!this._actionSheet) {
            this._actionSheet = sap.ui.jsfragment(
                "sciener.m.inspection.fragment.MainActionSheet",
                this
            );
            this.getView().addDependent(this._actionSheet);
        }

        this._actionSheet.openBy(oButton);
    },

    handleLogout: function(){
        var eventBus = sap.ui.getCore().getEventBus();
        eventBus.publish("logon", "logout");
    }

});