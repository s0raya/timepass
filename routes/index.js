const express = require('express');
const indexRouter = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware.js');

indexRouter.get('/', horaMiddleware, (req,res) => {
    const actualHour = req.dateType;
    let mensaje = '';
    if (req.query.mensaje) {
        mensaje = `<p>${req.query.mensaje}</p>`
    }
    res.send(`
    <h1>Bienvenido</h1>
    <div>La hora actual es ${actualHour}</div>
    ${mensaje}
    <a href="/endroute"><button>Entrar</button></a>
    `);
})


module.exports = indexRouter;