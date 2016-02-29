'use strict';
import { FdicSdiVarName } from './FdicSdiVarName';
import { QDate } from './QDate';

export class FdicGlossaryItem {
    varName:string;
    qDatesExists:Array<string>;     //string is QDate.toString()
    qDatesLoadedServer:Array<string>;     //string is QDate.toString()
    qDatesLoadedLocal:Array<string>;     //string is QDate.toString()
    fdicSdiFiles:Array<string>;     //string is FdicSdiFile.toFileName()


    constructor(varName:FdicSdiVarName) {
        this.varName=varName.toString();
    }
}

var vn=FdicSdiVarName.eq;

console.log(vn);
//var gi = new FdicGlossaryItem(FdicSdiVarName.)