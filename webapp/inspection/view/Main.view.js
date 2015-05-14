sap.ui.jsview('sciener.m.inspection.view.Main',{
   getControllerName: function(){
       "use strict";
       return 'sciener.m.inspection.view.Main';
   },

    createContent: function(oController){
        "use strict";
        this.setDisplayBlock(true);
        return new sap.m.SplitApp('idMainSplitApp',{

        });
    }
});