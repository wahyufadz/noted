'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NoteSchema extends Schema {
  up() {
    this.create('notes', (table) => {
      table.increments()
      table.string('title', 254).notNullable()
      table.text('content')
      table.text('user_id').reference('users')
      table.timestamps()
    })
  }

  down() {
    this.drop('notes')
  }
}

module.exports = NoteSchema
