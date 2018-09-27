'use strict'
const Joi = require('joi')

const api = require('./livros.api')
const schema = require('./livros.schema')

let rotas = [
  {
    path: '/v1/livros',
    method: 'GET',
    handler: api.list,
    options: {
      description: 'Busca livros',
      notes: 'Returna a lista de livros cadastrados',
      tags: ['api', 'livros'], // ADD THIS TAG
      // auth: { strategy: 'jwt', scope: ['admin', 'partner', 'user'] },
      validate: {
        query: schema.list
      },
      response: {
        schema: Joi.array().items(schema.response)
      }

    }
  },
  {
    path: '/v1/livros',
    method: 'POST',
    handler: api.create,
    options: {
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] },
      description: 'Cria livros',
      notes: 'Cria um livro, recurso para a criação de livros.',
      tags: ['api', 'livros'],
      validate: {
        payload: schema.create
      },
      response: {
        schema: schema.responseItem
      }
    }
  },
  {
    path: '/v1/livros/{isbn}',
    method: 'GET',
    handler: api.show,
    options: {
      description: 'Busca livro por ISBN',
      notes: 'Busca um livro pelo isbn, retornando somente este elemento.',
      tags: ['api', 'livros'],
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] }
      validate: {
        params: {
          isbn: Joi.string()
        }
      },
      response: {
        schema: schema.responseItem
      }
    }
  },
  {
    path: '/v1/livros/{isbn}',
    method: 'PUT',
    handler: api.update,
    options: {
      description: 'Atualiza livro',
      notes: 'Realiza a atualização do Livro pelo isbn',
      tags: ['api', 'livros'],
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] },
      validate: {
        payload: schema.update,
        params: {
          isbn: Joi.string()
        }
      },
      // response: {
      //   schema: schema.responseItem
      // }
      response: {
        status: {
          201: schema.responseItem,
          202: schema.responseItem,
        }
      }
    }
  },
  {
    path: '/v1/livros/{isbn}',
    method: 'DELETE',
    handler: api.delete,
    options: {
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] }
      description: 'Remove um livro',
      notes: 'Realiza a remoção do Livro pelo isbn',
      tags: ['api', 'livros'],
      validate: {
        params: {
          isbn: Joi.string()
        }
      }
    }
  },
  {
    path: '/v1/livros/{isbn}/autores',
    method: 'GET',
    handler: api.show,
    options: {
      description: 'Busca livro por ISBN',
      notes: 'Busca um livro pelo isbn, retornando somente este elemento.',
      tags: ['api', 'livros'],
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] }
      validate: {
        params: {
          isbn: Joi.string()
        }
      },
      response: {
        schema: schema.responseItem
      }
    }
  },
  {
    path: '/v1/livros/{isbn}/comentarios',
    method: 'GET',
    handler: api.show,
    options: {
      description: 'Busca livro por ISBN',
      notes: 'Busca um livro pelo isbn, retornando somente este elemento.',
      tags: ['api', 'livros'],
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] }
      validate: {
        params: {
          isbn: Joi.string()
        }
      },
      response: {
        schema: schema.responseItem
      }
    }
  },
  {
    path: '/v1/livros/{isbn}/comentarios',
    method: 'POST',
    handler: api.show,
    options: {
      description: 'Busca livro por ISBN',
      notes: 'Busca um livro pelo isbn, retornando somente este elemento.',
      tags: ['api', 'livros'],
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] }
      validate: {
        params: {
          isbn: Joi.string()
        }
      },
      response: {
        schema: schema.responseItem
      }
    }
  }

]

module.exports = rotas
