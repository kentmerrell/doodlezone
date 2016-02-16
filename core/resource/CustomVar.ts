'use strict';
import * as Enums from "./Enums";

export class CustomVar {

    Name:string;                // Should not be confused with the name of the variable that references this instance.

    SourceType:Enums.SourceType;   //

    DDType:Enums.DDType;           // The type of data this CustomVar evaluates to.

    DDValue:string;

    DDValueDate:Date;           // the date this particular instance applies to.

    DateUpdated:Date;

    DateCreated:Date;

    Formula:String;             // Use this formula to regenerate the regeneration is triggered (i.e., value of
                                // this variable if something in pedigree changes)

    Author:String;              // Userid of user that created this variable.

    constructor(ddtype:Enums.DDType) {
        this.DDType = ddtype;
    }
}

