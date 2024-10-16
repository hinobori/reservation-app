const express = require('express')
const router = express.Router()
const Product = require("../model/product")

router.get('', async function(req, res) {
    foundProducts = await Product.find({})
    return res.json(foundProducts)

})

router.get('/:productId', async function(req, res) {
    const productId = req.params.productId
    try {
        foundProducts = await Product.findById(productId)
        return res.json(foundProducts)
    } catch(err) {
        return res.status(422).send({erroes: [{title: 'プロダクトエラー', detail: 'プロダクトがないです!'}]})
    }
    

})

module.exports = router