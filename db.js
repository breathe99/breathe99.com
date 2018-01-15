var MongoClient = require('mongodb').MongoClient;

var state = {
  db: null
};

function connect(done) {
  if (state.db) return done();

  MongoClient.connect('', function(err, db) {
    if (err) return done(err);
    state.db = db;
    done();
  });
}

function get() {
  return state.db;
}

function close(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null;
      state.mode = null;
      done(err);
    });
  }
}

exports.connect = connect;
exports.get = get;
exports.close = close;
