const express = require('express')
const bodyParser = require('body-parser')
const multiparty = require('multiparty')
const cors = require('cors')

const handlers = require('./lib/handlers')
require('./db')

const app = express()
const expressHandlebars = require('express-handlebars')

app.use('/api', cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 3033

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
  helpers: {
    section: function(name, options) {
      if(!this._sections) this._sections = {}
      this._sections[name] = options.fn(this)
      return null
    },
  },
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))
app.get('/api/vacations', handlers.getVacationsApi)
app.get('/api/vacation/:sku', handlers.getVacationBySkuApi)
app.post('/api/vacation/:sku/notify-when-in-season', handlers.addVacationInSeasonListenerApi)
app.delete('/api/vacation/:sku', handlers.requestDeleteVacationApi)

if(require.main === module) {
  app.listen(port, () => {
    console.log( `Express started on ` +
      `${app.get('env')} mode at http://localhost:${port}; ` +
      'press Ctrl-C to terminate.' )
      
  })
} else {
  module.exports = app
}
