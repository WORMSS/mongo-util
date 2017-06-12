var _db;

module.exports = {
    connect: function ({host = "localhost", port = 27017, dbname = "exampleDb"} = {}) {
        return require("mongodb").MongoClient.connect(`mongodb://${host}:${port}/${dbname}`)
            .then(db => _db = db);
    },
    collection: function (col_name) {
        if ( !_db ) {
            return null;
        }
        return _db.collection(col_name);
    },
    get db() { return _db; }
};