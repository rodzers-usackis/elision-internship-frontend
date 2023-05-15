module.exports = (req, res, next) => {
    req.url = `/api${req.url}`;
    next();
};
