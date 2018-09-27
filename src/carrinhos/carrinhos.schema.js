'use strict'

const Joi = require('joi')

let schema = {}

schema.list = Joi.object().keys({
  query: Joi.string().min(3).max(60).optional().default(''),
  page: Joi.number().optional().default(0),
  pagesize: Joi.number().optional().default(25),
  order: Joi.string().optional().default('name')
})

schema.create = Joi.object().keys({
  id: Joi.string().required(),
  name: Joi.string().required()
})

schema.update = Joi.object().keys({
  id: Joi.string().required(),
  name: Joi.string().required()
})

schema.edit = Joi.object().keys({
  isbn: Joi.number()
})

schema.detele = Joi.object().keys({
  id: Joi.number()
})

schema.response = Joi.array().items(
  Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required()
  })
)

schema.responseItem = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required()
})

module.exports = schema
