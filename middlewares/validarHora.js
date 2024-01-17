const validarHora = (req,res) => {
    const actualHour = req.dateType;
    if (!(actualHour > '12:00' && actualHour <= '23:59')) {
        res.locals.mensaje = `Aún no es la hora, espera hasta las 12:00 para entrar`;
        res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
}

module.exports = validarHora;
