'use strict';

import { Cert } from './Cert'
import { QDate } from './QDate'
import { FdicSdiVarName } from './FdicSdiVarName'

export class FdicVarInstance{
    varName:string;
    certId:number;
    qdate:QDate;

    constructor(varname:FdicSdiVarName,cert:Cert,qdate:QDate){
        this.varName=varname.toString();
        this.certId=cert.toNumber()
    }
}