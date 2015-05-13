sap.ui.jsview('sciener.m.inspection.view.Home', {
    getControllerName: function () {
        'use strict';
        return 'sciener.m.inspection.view.Home';
    },

    createContent: function (oContraller) {
        'use strict';
        this.setDisplayBlock(true);
        return new sap.m.Button({text: "Home"});
    }
});