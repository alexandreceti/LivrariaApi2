'use strict'
const Joi = require('joi')

const api = require('./autores.api')
const schema = require('./autores.schema')

let rotas = [
  {
    path: '/v1/autores',
    method: 'GET',
    handler: api.list,
    options: {
      description: 'Busca autores',
      notes: 'Returna a lista de autores cadastrados',
      tags: ['api', 'autores'], // ADD THIS TAG
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
    path: '/v1/autores',
    method: 'POST',
    handler: api.create,
    options: {
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] },
      description: 'Cria autores',
      notes: 'Cria um autor, recurso para a criação de autores.',
      tags: ['api', 'autores'],
      validate: {
        payload: schema.create
      },
      response: {
        schema: schema.responseItem
      }
    }
  },
  {
    path: '/v1/autores/{AutorId}',
    method: 'GET',
    handler: api.show,
    options: {
      description: 'Busca autor pelo Id do autor',
      notes: 'Busca um Autor pelo AutorId, retornando somente este elemento.',
      tags: ['api', 'autores'],
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] }
      validate: {
        params: {
          AutorId: Joi.string()
        }
      },
      response: {
        schema: schema.responseItem
      }
    }
  },
  {
    path: '/v1/autores/{AutorId}',
    method: 'PUT',
    handler: api.update,
    options: {
      description: 'Atualiza autor',
      notes: 'Realiza a atualização do autor pelo AutorId',
      tags: ['api', 'autores'],
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] },
      validate: {
        payload: schema.update,
        params: {
          AutorId: Joi.string()
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
    path: '/v1/autores/{AutorId}',
    method: 'DELETE',
    handler: api.delete,
    options: {
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] }
      description: 'Remove um autor',
      notes: 'Realiza a remoção do autor pelo AutorId',
      tags: ['api', 'autores'],
      validate: {
        params: {
          AutorId: Joi.string()
        }
      }
    }
  },
  {
    path: '/v1/autores/{AutorId}/livros',
    method: 'GET',
    handler: api.show,
    options: {
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] }
      description: 'Busca os livros do autor',
      notes: 'Busca os livros do autor pelo AutorId',
      tags: ['api', 'autores'],
      validate: {
        params: {
          AutorId: Joi.string()
        }
      }
    }
  }
]

module.exports = rotas
