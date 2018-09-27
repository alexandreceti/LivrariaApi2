'use strict'
const Joi = require('joi')

const api = require('./pedidos.api')
const schema = require('./pedidos.schema')

let rotas = [
  {
    path: '/v1/pedidos',
    method: 'GET',
    handler: api.list,
    options: {
      description: 'Busca pedidos',
      notes: 'Returna a lista de pedidos cadastrados',
      tags: ['api', 'pedidos'], // ADD THIS TAG
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
    path: '/v1/pedidos',
    method: 'POST',
    handler: api.create,
    options: {
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] },
      description: 'Cria pedidos',
      notes: 'Cria um pedido, recurso para a criação de pedidos.',
      tags: ['api', 'pedidos'],
      validate: {
        payload: schema.create
      },
      response: {
        schema: schema.responseItem
      }
    }
  },
  {
    path: '/v1/pedidos/{PedidosId}',
    method: 'GET',
    handler: api.show,
    options: {
      description: 'Busca pedido por Id do pedido',
      notes: 'Busca um pedido pelo PedidosId, retornando somente este elemento.',
      tags: ['api', 'pedidos'],
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] }
      validate: {
        params: {
          PedidosId: Joi.string()
        }
      },
      response: {
        schema: schema.responseItem
      }
    }
  },
  {
    path: '/v1/pedidos/{PedidosId}',
    method: 'PUT',
    handler: api.update,
    options: {
      description: 'Atualiza pedido',
      notes: 'Realiza a atualização do pedido pelo PedidosId',
      tags: ['api', 'pedidos'],
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] },
      validate: {
        payload: schema.update,
        params: {
          PedidosId: Joi.string()
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
    path: '/v1/pedidos/{PedidosId}',
    method: 'DELETE',
    handler: api.delete,
    options: {
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] }
      description: 'Remove um pedido',
      notes: 'Realiza a remoção do pedido pelo PedidosId',
      tags: ['api', 'pedidos'],
      validate: {
        params: {
          PedidosId: Joi.string()
        }
      }
    }
  },
  {
    path: '/v1/pedidos/{PedidosId}/status',
    method: 'GET',
    handler: api.show,
    options: {
      // auth: { strategy: 'jwt', scope: ['admin', 'partner'] }
      description: 'Busca o status do pedido',
      notes: 'Entrega o status atual do pedido pelo PedidosId',
      tags: ['api', 'pedidos'],
      validate: {
        params: {
          PedidosId: Joi.string()
        }
      }
    }
  }
]

module.exports = rotas
