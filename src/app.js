const path = require('path')
const express = require('express')
const search = require('./utils/search')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

const port = process.env.PORT || 3000

app.get('' , (req,res)=>{
    res.send('index')
})
app.get('/search' , (req,res)=>{
    if(!req.query.movie){
        return res.send({error : 'you must provide a movie '})
    }else{
        search(req.query.movie , (error , {title , desc , img}={})=>{
            if(error){
                return res.send({error})
            }
            res.send({ title ,desc ,img , movie:req.query.movie})
        })
    }
})

app.listen(port , ()=>{
    console.log('backend server is running on port',port)
})