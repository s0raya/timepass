const horaMiddleware = (req, res, next) => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${hour}:${minutes}`;
    req.dateType = formattedTime;
    next();
}

module.exports = horaMiddleware;