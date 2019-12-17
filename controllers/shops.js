let router = require('express').Router()
let db = require('../models')

router.get('/', (req, res) => {
    db.shop.findAll()
    .then(shop => {
        res.render('shops/index', { shop })
    })
    .catch(err => {
        console.log(err)
        res.send('Error')
    })
})

router.post('/', (req, res) => {
    db.shop.create(req.body)
        .then(newShop => {
            res.redirect('/shops')
        })
        .catch(err => {
            console.log('Error', err)
            res.send('Error')
        })
    }
)

router.get('/new', (req, res) => {
    res.render('shops/new')
})

router.get('/:id', (req, res) => {
    db.shop.findByPk(req.params.id)
    .then(shop => {
        res.render('shops/show')
    })
    .catch(err => {
        console.log('Error', err)
        res.send('Error')
    })
})

module.exports = router