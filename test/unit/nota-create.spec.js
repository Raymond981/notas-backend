'use strict'

const { test, trait } = use('Test/Suite')('Nota Create')
trait('Test/ApiClient')

const Nota = use('App/Models/Nota')

test('Insertamos una nueva nota', async ({ client }) => {

  const response = await client.post('/api/notas')
    .send({
      nota: 'ESTO ES UNA PRUEBA'
    })
    .end()
  response.assertStatus(401)
  response.assertJSON({ message: 'Nota create successful.' })

})
