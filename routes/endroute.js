const express = require('express');
const endrouteRouter = express.Router();
const validarHora = require('../middlewares/validarHora.js')
const horaMiddleware = require('../middlewares/horaMiddleware.js');

endrouteRouter.get('/', horaMiddleware, (req,res) => {
    validarHora(req,res);
    res.send('<h1>Ruta Final</h1><h3>¡Bienvenido a la ruta final!</h3>')
})

module.exports = endrouteRouter;