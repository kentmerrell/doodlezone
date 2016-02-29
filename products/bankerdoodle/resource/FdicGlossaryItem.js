'use strict';
var FdicSdiVarName_1 = require('./FdicSdiVarName');
class FdicGlossaryItem {
    constructor(varName) {
        this.varName = varName.toString();
    }
}
exports.FdicGlossaryItem = FdicGlossaryItem;
var vn = FdicSdiVarName_1.FdicSdiVarName.eq;
console.log(vn);
//var gi = new FdicGlossaryItem(FdicSdiVarName.) 
//# sourceMappingURL=FdicGlossaryItem.js.map