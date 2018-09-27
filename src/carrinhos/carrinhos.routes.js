'use strict'
const Joi = require('joi')

const api = require('./carrinhos.api')
const schema = require('./carrinhos.schema')

let rotas = [
  {
    path: '/v1/carrinhos',
    method: 'GET',
    handler: api.list,
    options: {
      description: 'Busca carrinhos',
      notes: 'Returna a lista de carrinhos cadastrados',
      tags: ['api', 'carrinhos'], // ADD THIS TAG
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
    path: '/v1/carrinhos',
    method: 'POST',
    handler: api.create,
    options: {
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] },
      description: 'Cria carrinhos',
      notes: 'Cria um carrinho, recurso para a criação de carrinhos.',
      tags: ['api', 'carrinhos'],
      validate: {
        payload: schema.create
      },
      response: {
        schema: schema.responseItem
      }
    }
  },
  {
    path: '/v1/carrinhos/{CarrinhoId}',
    method: 'GET',
    handler: api.show,
    options: {
      description: 'Busca carrinho por Id do carrinho',
      notes: 'Busca um carrinho pelo CarrinhoId, retornando somente este elemento.',
      tags: ['api', 'carrinhos'],
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] }
      validate: {
        params: {
          CarrinhoId: Joi.string()
        }
      },
      response: {
        schema: schema.responseItem
      }
    }
  },
  {
    path: '/v1/carrinhos/{CarrinhoId}',
    method: 'PUT',
    handler: api.update,
    options: {
      description: 'Atualiza carrinho',
      notes: 'Realiza a atualização do carrinho pelo CarrinhoId',
      tags: ['api', 'carrinhos'],
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] },
      validate: {
        payload: schema.update,
        params: {
          CarrinhoId: Joi.string()
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
    path: '/v1/carrinhos/{CarrinhoId}',
    method: 'DELETE',
    handler: api.delete,
    options: {
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] }
      description: 'Remove um carrinho',
      notes: 'Realiza a remoção do carrinho pelo CarrinhoId',
      tags: ['api', 'carrinhos'],
      validate: {
        params: {
          CarrinhoId: Joi.string()
        }
      }
    }
  },
  {
    path: '/v1/carrinhos/{CarrinhoId}/livros',
    method: 'GET',
    handler: api.show,
    options: {
      description: 'Busca os livros que estão no carrinho pelo Id do carrinho',
      notes: 'Busca um carrinho pelo CarrinhoId, retornando somente este elemento.',
      tags: ['api', 'carrinhos'],
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] }
      validate: {
        params: {
          CarrinhoId: Joi.string()
        }
      },
      response: {
        schema: schema.responseItem
      }
    }
  },
  {
    path: '/v1/carrinhos/{CarrinhoId}/livros',
    method: 'POST',
    handler: api.show,
    options: {
      description: 'Coloca os livros no carrinho',
      notes: 'Busca um carrinho pelo CarrinhoId, retornando somente este elemento.',
      tags: ['api', 'carrinhos'],
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] }
      validate: {
        params: {
          CarrinhoId: Joi.string()
        }
      },
      response: {
        schema: schema.responseItem
      }
    }
  }

]

module.exports = rotas
