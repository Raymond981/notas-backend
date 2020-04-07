'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NotasSchema extends Schema {
  up () {
    this.table('notas', (table) => {
    })
  }

  down () {
    this.table('notas', (table) => {
    })
  }
}

module.exports = NotasSchema
