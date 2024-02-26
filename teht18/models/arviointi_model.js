const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from arviointi where id_arviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (idopintojakso,idOpiskelija,Arvosana,Päivämäärä) values(?,?,?,?)',
      [arviointi.idopintojakso, arviointi.idOpiskelija, arviointi.Arvosana,arviointi.Päivämäärä],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where id_arviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set idopintojakso=?,idOpiskelija=?, Arvosana=?, Päivämäärä=? where id_arviointi=?',
      [arviointi.idopintojakso, arviointi.idOpiskelija, arviointi.Arvosana, arviointi.Päivämäärä, id],
      callback
    );
  }
};
module.exports = arviointi;