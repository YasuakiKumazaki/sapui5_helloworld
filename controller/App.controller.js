sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "test/helloworld/model/formatter"
], function (Controller, Filter, FilterOperator, formatter) {
   "use strict";
   return Controller.extend("test.helloworld.controller.App", {
        formatter: formatter,

        onFilterProducts : function (oEvent) {
            // build filter array
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(new Filter("name", FilterOperator.Contains, sQuery));
            }

            // filter binding
            var oList = this.byId("productList");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);           
        }
   });
});
