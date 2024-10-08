sap.ui.define([], function () {
    "use strict";

    return {
        classText: function (sClass) {
            switch (sClass) {
                case "C":
                    return "Business Class";
                case "Y":
                    return "Economy Clas";
                case "F":
                    return "First Class";
                default:
                    return sClass;
            }
        }
    }
});