var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var data = {msg:'success'};
    req.session.isUserLoggedIn = false;
    data = JSON.stringify(data);
    res.send(data);
});

module.exports = router;
