
const express = require('express')
const multer = require('multer')
const inserirutilizadorRoute = express.Router()
const connection = require('../dbconnection')

inserirutilizadorRoute.post('/', (req,res) => {
   
    const storage=multer.diskStorage({
        destination:(req,fil,callback)=>{
          callback(null, '.public/fotos')
        },
        filename:(req,file,callback)=>{
          callback(null, file.originalname)
        } 
      })
      
      const upload=multer({
        storage:storage,
        limits:{fileSize: 1000000}
      })
      
      upload(req,res,(err)=>{
        console.log(req.files)
      })

    /*connection.query('INSERT INTO utilizadores (nomeutilizador,moradarua,moradanumero,datanascimento,telemovel,email,idtipos) VALUES(?,?,?,?,?,?,?)',
      [req.body.nomeutilizador,req.body.moradarua, req.body.moradanumero,req.body.datanascimento,req.body.telemovel,req.body.email,req.body.idtipos],
      (err,result) => {
        if(err){
            console.log(err)
        }
        else {
            res.json({text : 'Utilizador adicionado com sucesso!'})
        }
    })*/
    
})

module.exports = inserirutilizadorRoute