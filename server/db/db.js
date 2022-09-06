const connection = require('./connection')

function getCharacters(db = connection) {
  return db('characters').select()
}

module.exports = {
  getCharacters,
}
