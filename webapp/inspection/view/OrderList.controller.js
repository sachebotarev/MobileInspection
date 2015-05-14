sap.ui.controller('sciener.m.inspection.view.OrderList',{
    onInit: function(){
        "use strict";
    },
    onBeforeRendering: function(){
        "use strict";
    },

    onAfterRendering: function(){
        "use strict";
    },

    onExit: function(){
        "use strict";
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
        "use strict";
        var eventBus = sap.ui.getCore().getEventBus();
        eventBus.publish("logon", "logout");
    }

});