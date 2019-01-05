const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000,
      public = express.static(`${__dirname}/public`),
      hbs = require('hbs')

hbs.registerPartials(`${__dirname}/views/partials`)
app.set('view engine', 'hbs')
require('./hbs/helpers')
app
.use(public)
.set('views', `${__dirname}/views`)
.get('/', (req, res) => {
    res.render('index', {
        name: 'JD',
        title: 'Inicio'
    })
})
.get('/about', (req, res) => {
    res.render('about', {
        title: 'Acerca de'
    })
})
.listen(port, () => console.log(`Working in port ${port}`))