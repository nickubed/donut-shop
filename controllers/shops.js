let router = require('express').Router()

router.get('/', (req, res) => {
    res.send('ALL SHOPS ROUTE')
})

router.post('/', (req, res) => {
    res.send('MAKE NEW SHOP ROUTE')
})

router.get('/new', (req, res) => {
    res.render('shops/new')
})

router.get('/:id', (req, res) => {
    res.send('SHOP DETAIL ROUTE')
})

module.exports = router