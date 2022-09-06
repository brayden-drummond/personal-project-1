exports.up = function (knex) {
  return knex.schema.createTable('characters', (table) => {
    table.increments('id')
    table.string('name')
    table.string('image')
    table.string('class')
    table.string('bio')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('characters')
}
