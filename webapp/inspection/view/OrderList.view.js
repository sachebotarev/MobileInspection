sap.ui.jsview('sciener.m.inspection.view.Main',{
    getControllerName: function(){
        'use strict';
        return 'sciener.m.inspection.view.Main';
    },

    createContent: function(oContraller){
        'use strict';
        this.setDisplayBlock(true);
        return new sap.m.BaseList();
    }
});