'use strict'
const Nota = use('App/Models/Nota');

class NotaController {
    async index ({ request, response, view }) {
        let notas = await Nota.all()
        return response.json(notas)
    }

    async store ({ request, response }) {

        const nota = request.input('nota')
        
        const notita = new Nota()
        

        notita.nota = nota
        await notita.save()
        return response.json(notita)
    }

    async update ({ params, request, response }) {    
        const nota = request.input('nota')
        
        let notita = await Nota.find(params.id)
        

        notita.nota = nota
        await notita.save()
        return response.json(notita)
    }

    async destroy ({ params, request, response }) {
        let notita = await Nota.find(params.id)

        notita.deleted = 1
        await notita.save()
        return response.json({message: 'Nota eliminada!'})
    } 
}

module.exports = NotaController
