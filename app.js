const express = require('express');
const app = express();
const indexRouter = require('./routes/index.js');
const endrouteRouter = require('./routes/endroute.js')


app.use('/', indexRouter);

app.use('/endroute', endrouteRouter);




app.listen(3000, () => {
    console.log('El servidor está escuchando en http://localhost:3000');
})