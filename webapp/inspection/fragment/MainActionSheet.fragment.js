sap.ui.jsfragment("sciener.m.inspection.fragment.MainActionSheet",{
    createContent: function(oController){
        "use strict";
        return new sap.m.ActionSheet(this.createId("idMainActionSheet"),{
            title: "{i18n>TITLE_MAIN_ACTION_SHEET}",
            showCancelButton: true,
            placement: sap.m.PlacementType.Vertical,
            buttons:[
                new sap.m.Button({
                    text: "{i18n>TEXT_BUTTON_DAMAGE}",
                    icon: "sap-icon://alert"
                }),
                new sap.m.Button({
                    text: "{i18n>TEXT_BUTTON_LOGOUT}",
                    icon: "sap-icon://log"
                }),
                new sap.m.Button({
                    text: "{i18n>TEXT_BUTTON_ABOUT}",
                    icon: "sap-icon://hint"
                })
            ]
        });
    }
});