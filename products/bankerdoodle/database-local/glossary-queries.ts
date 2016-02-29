/// <reference path="../../../typings/node.d.ts"/>
//import {Promise} from 'es6-promise';
'use strict';
var Datastore = require('nedb');
var db = new Datastore({filename: __dirname + '/glossary-data.json', autoload: true});

//console.log(db);
export function FdicGlossaryItem() {
    var cursor = db.find({File: {$regex: /Credit/}}, {File: 1, VarName: 1, _id: 0});
    return cursor;
}


console.log()

var promise = new Promise(function (resolve, reject) {
    // do a thing, possibly async, then…
    var x = FdicGlossaryItem();

    x.exec(function (err, docs) {
        //console.log(docs)

        if (docs.length > 0) {
            resolve(docs);
        }
        else {
            reject(Error("It broke"));
        }
    })
});
promise.then(function(result){
    console.log(result)
})
//console.log(promise);
//setTimeout(function(){
//    console.log(promise);
//},5000)
