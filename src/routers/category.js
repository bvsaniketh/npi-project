const express = require('express')
const Category = require('../models/category')
const router = new express.Router()


router.post('/category', async(req, res) => {
    console.log('POST request for /category')
    const category = new Category(req.body)
    try {
        console.log('Inserting Category')
        await category.save()
        res.status(201).send(category)

    } catch(e) {
        console.log(e)
        res.status(400).send(e)
    }
})

router.get('/category/:name', async(req ,res) => {
    console.log('GET request for /category/:name')
    const name = req.params.name

    try {
        //const task = await Task.findById(_id)

        const category =  await Category.findOne({"name": name})
        
        if(!category){
            res.status(404).send()   
        }

        res.send(category)
    } catch(e) {
        console.log(e)
        res.status(500).send(e)
    }
})

module.exports = router