module.exports = reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send(`<h1>Please provide age</h1>`);
    }
    else if (req.query.age < 18) {
        res.send("You are not allowed to access this page");
    }
    else {
        next();
    }
}