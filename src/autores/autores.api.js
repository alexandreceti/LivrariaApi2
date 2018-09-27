'use strict'

const Boom = require('boom')
var autoresModel = require('./autores.model')
// const User = require('../models/users')
const api = {}

api.list = async (request, h, error) => {
  console.log('#lista de Studies')
  const { query, page, pagesize, order } = request.query

  // console.log(query)
  try {
    // console.log(LivrosModel.lista)
    return autoresModel.lista
  } catch (e) {
    console.log(e)
  }
}

api.create = async (request, h, error) => {

  const new_livro = Object.assign({}, request.payload, {
    datePublished: new Date()
  })
  // const new_studio = { }request.payload
  console.log('--- New Livro ----')
  console.log(new_livro)
  try {
    autoresModel.lista.push(new_livro)
    return new_livro
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
    let busca = autoresModel.lista.filter((item) => item.isbn === isbn)
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
  const LivroUpdate = request.payload
  console.log('#UpdateLivro')

  try {
    autoresModel.lista.map((item) => {
      if (item.isbn === isbn) {
        item.isbn = isbn
        item.title = LivroUpdate.title
        item.author = LivroUpdate.author
        item.description = LivroUpdate.description
      }
      return item
    })
    // console.log(busca)

    return h.response(LivroUpdate).code(201)
  } catch (err) {
    console.log(err)
    throw Boom.badData(err.message)
  }
}
api.delete = async (request, h, error) => {
  const isbn = request.params.isbn
  console.log(isbn)

  try {
    LivrosModel.lista.filter((item) => item.isbn !== isbn)
    return true
  } catch (err) {
    console.log(err)
    throw Boom.badData(err.message)
  }
}
module.exports = api
