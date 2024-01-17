const express = require('express');
const app = express();
const indexRouter = require('./routes/index.js');
const endrouteRouter = require('./routes/endroute.js');


app.use('/', indexRouter);

app.use('/endroute', endrouteRouter);

app.use((req,res) => {
    res.status(404).send(`<h1>Página no encontrada</h1>`)
});


app.listen(3000, () => {
    console.log('El servidor está escuchando en http://localhost:3000');
});