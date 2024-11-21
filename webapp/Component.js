sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "student402/com/sap/training/ux402/listdetail/ux402listdetail/model/models",
    "student402/com/sap/training/ux402/listdetail/ux402listdetail/controller/ListSelector"
], (UIComponent, Device, models, ListSelector) => {
    "use strict";

    return UIComponent.extend("student402.com.sap.training.ux402.listdetail.ux402listdetail.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // instantiation of the listselector
            this.oListSelector = new ListSelector();

            // enable routing
            this.getRouter().initialize();

            // set the device model
            this.setModel(models.createDeviceModel(), "device");
        }
    });
});