const {Router} = require('express')
const express = require('express')
const  path = require('path')
const navbarRoute=express.Router()

navbarRoute.get('/', (req,response)=>{
    response.sendFile(path.join(__dirname, '../public/navbar.html'))
 })
 
 module.exports = navbarRoute