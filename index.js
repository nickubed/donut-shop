let express = require('express')
let layouts = require('express-ejs-layouts')
let app = express()
let db = require('./models')

app.set('view engine', 'ejs')
app.use(layouts)
app.use(express.urlencoded({ extended: false}))

app.use('/shops', require('./controllers/shops'))
app.use('/donuts', require('./controllers/donuts'))

// app.post('/donut', (req, res) => {
//     db.donut.create(req.body)
//     .then(donut => {
//         res.redirect('/shops/' + req.body.shopId)
//     })
//     .catch(err => {
//         console.log(err)
//         res.send('Error')
//     })
// })

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(process.env.PORT || 3000)