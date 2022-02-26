const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
router.get('/',(req,res)=>{
    res.json({"hello":"world"})
})
router.post('/',()=>{

})

module.exports = router