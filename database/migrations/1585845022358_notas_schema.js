'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NotasSchema extends Schema {
  up () {
    this.create('notas', (table) => {
      table.increments()
      table.string("nota")
      table.integer("deleted").defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('notas')
  }
}

module.exports = NotasSchema
