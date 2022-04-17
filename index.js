const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error-handler');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Servicio express iniciado');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port);
});


//Endpoints
//GET
//-- /ranking
//-- /ranking/category/:id
//-- /ranking/personal/:id
//-- /profile/:id


//QueryParams
//api.example.com/products?page=1
//api.example.com/products?limit=10&offset=0
//api.example.com/products?region=USA
//api.example.com/products?region=USA&brand=XYZ

//IMPORTANTE: Primero van los endpoints fijos(/products/filter) y luego los endpoints dinámicos(/products/:id)
