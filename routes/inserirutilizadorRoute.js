const { response, request } = require('express')
const express = require('express')
const inserirutilizadorRoute = express.Router()
const connection = require('../dbconnection')

inserirutilizadorRoute.post('/',(req,res) =>  {

/*connection.query('SELECT * FROM tipos', (err,result) =>  {
    if(err){
      console.log('Erro na base de dados...')
    }
    else{
      res.json(result)
    }
  })*/
    console.log(request.body)
    responde.json({Text : 'Chegou tudo inteiro!'})
})

module.exports = inserirutilizadorRoute 