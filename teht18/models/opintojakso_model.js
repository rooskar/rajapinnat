const db = require('../database');

const opintojakso = {
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from opintojakso where id_opintojakso=?', [id], callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (Nimi,Laajuus,Koodi) values(?,?,?)',
      [opintojakso.Nimi, opintojakso.Laajuus,opintojakso.Koodi],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where id_opintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set Nimi=?, Laajuus=?, Koodi=? where id_opintojakso=?',
      [opintojakso.Nimi, opintojakso.Laajuus, opintojakso.Koodi, id],
      callback
    );
  }
};
module.exports = opintojakso;