var Datastore = require('nedb');

var db = new Datastore({ filename: __dirname + '/db.json', autoload: true });


db.findOne({ _id: 1 }, function (err, doc) {
    doc = doc || { _id: 1, counter: 0 };

    console.log('This example was executed ' + doc.counter + ' times. Last access time was ' + doc.lastSeetAt);

    doc.lastSeetAt = new Date();
    doc.counter++;

    db.update({ _id: 1 }, doc, { upsert: true }, function (err, num) {
        console.log('Updated ' + num + ' records');
    });
});

db.ensureIndex({fieldName:'counter'},function(err){
    console.log('err',err)
})