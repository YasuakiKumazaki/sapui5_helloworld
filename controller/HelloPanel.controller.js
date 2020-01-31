sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "test/helloworld/model/formatter"
], function (Controller, JSONModel, MessageToast, formatter) {
   "use strict";
   return Controller.extend("test.helloworld.controller.HelloPanel", {
        _data : {
            "date" : new Date()
        },

        onInit : function (oEvent) {
            var oModel = new JSONModel(this._data);
            this.getView().setModel(oModel);
        },  

        onShowHello : function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sProduct = this.getView().getModel("mPrice").getProperty("/product/name");
            var sMsg = oBundle.getText("helloMessage", [sProduct]);

            // show a native JavaScript alert
            MessageToast.show(sMsg);
        }
   });
});