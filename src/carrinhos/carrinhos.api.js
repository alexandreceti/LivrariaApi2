'use strict'

const Boom = require('boom')
var carrinhosModel = require('./carrinhos.model')
// const User = require('../models/users')
const api = {}

api.list = async (request, h, error) => {
  console.log('#lista de Carrinhos')
  const { query, page, pagesize, order } = request.query

  // console.log(query)
  try {
    // console.log(carrinhosModel.lista)
    return carrinhosModel.lista
  } catch (e) {
    console.log(e)
  }
}

api.create = async (request, h, error) => {

  const new_carrinho = Object.assign({}, request.payload, {
    datePublished: new Date()
  })
  // const new_studio = { }request.payload
  console.log('--- New carrinho ----')
  console.log(new_carrinho)
  try {
    carrinhosModel.lista.push(new_carrinho)
    return new_carrinho
  } catch (err) {
    console.log(err)
    throw Boom.badData(err.message)
  }
}

api.show = async (request, h, error) => {
  console.log('--- show album id ---')
  const isbn = request.params.isbn
  console.log(isbn)
  try {
    let busca = carrinhosModel.lista.filter((item) => item.isbn === isbn)
    console.log(busca)
    return busca[0]
  } catch (err) {
    console.log(err)
    throw Boom.badData(err.message)
  }
}

api.update = async (request, h, error) => {
  const isbn = request.params.isbn
  console.log(isbn)
  const carrinhoUpdate = request.payload
  console.log('#Updatecarrinho')

  try {
    carrinhosModel.lista.map((item) => {
      if (item.isbn === isbn) {
        item.isbn = isbn
        item.title = carrinhoUpdate.title
        item.author = carrinhoUpdate.author
        item.description = carrinhoUpdate.description
      }
      return item
    })
    // console.log(busca)

    return h.response(carrinhoUpdate).code(201)
  } catch (err) {
    console.log(err)
    throw Boom.badData(err.message)
  }
}
api.delete = async (request, h, error) => {
  const isbn = request.params.isbn
  console.log(isbn)

  try {
    carrinhosModel.lista.filter((item) => item.isbn !== isbn)
    return true
  } catch (err) {
    console.log(err)
    throw Boom.badData(err.message)
  }
}
module.exports = api
