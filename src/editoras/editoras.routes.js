'use strict'
const Joi = require('joi')

const api = require('./editoras.api')
const schema = require('./editoras.schema')

let rotas = [
  {
    path: '/v1/editoras',
    method: 'GET',
    handler: api.list,
    options: {
      description: 'Busca editoras',
      notes: 'Returna a lista de editoras cadastrados',
      tags: ['api', 'editoras'], // ADD THIS TAG
      // auth: { strategy: 'jwt', scope: ['admin', 'partner', 'user'] },
      validate: {
        query: schema.list
      },
      response: {
        schema: schema.response
      }

    }
  },
  {
    path: '/v1/editoras',
    method: 'POST',
    handler: api.create,
    options: {
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] },
      description: 'Cria editoras',
      notes: 'Cria um editora, recurso para a criação de editoras.',
      tags: ['api', 'editoras'],
      validate: {
        payload: schema.create
      },
      response: {
        schema: schema.responseItem
      }
    }
  },
  {
    path: '/v1/editoras/{EditodaId}',
    method: 'GET',
    handler: api.show,
    options: {
      description: 'Busca livro por Id da editora',
      notes: 'Busca uma editora pelo EditodaId, retornando somente este elemento.',
      tags: ['api', 'editoras'],
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] }
      validate: {
        params: {
          EditodaId: Joi.string()
        }
      },
      response: {
        schema: schema.responseItem
      }
    }
  },
  {
    path: '/v1/editoras/{EditodaId}',
    method: 'PUT',
    handler: api.update,
    options: {
      description: 'Atualiza livro',
      notes: 'Realiza a atualização da editora pelo EditodaId',
      tags: ['api', 'editoras'],
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] },
      validate: {
        payload: schema.update,
        params: {
          EditodaId: Joi.string()
        }
      },
      // response: {
      //   schema: schema.responseItem
      // }
      response: {
        status: {
          201: schema.responseItem,
          202: schema.responseItem
        }
      }
    }
  },
  {
    path: '/v1/editoras/{EditodaId}',
    method: 'DELETE',
    handler: api.delete,
    options: {
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] }
      description: 'Remove uma editora',
      notes: 'Realiza a remoção da editora pelo EditodaId',
      tags: ['api', 'editoras'],
      validate: {
        params: {
          EditodaId: Joi.string()
        }
      }
    }
  }
]

module.exports = rotas
