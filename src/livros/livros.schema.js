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
  title: Joi.string().required(),
  author: Joi.string().required(),
  isbn: Joi.string(),
  description: Joi.strict()
})

schema.update = Joi.object().keys({
  title: Joi.string().required(),
  author: Joi.string().required(),
  isbn: Joi.string(),
  description: Joi.strict()
})

schema.edit = Joi.object().keys({
  isbn: Joi.string()
})

schema.detele = Joi.object().keys({
  isbn: Joi.string()
})

schema.response = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  isbn: Joi.string(),
  description: Joi.strict(),
  pageCount: Joi.number(),
  datePublished: Joi.date().iso()
});

schema.responseItem = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  isbn: Joi.string(),
  description: Joi.strict(),
  datePublished: Joi.date().iso()
});

module.exports = schema
