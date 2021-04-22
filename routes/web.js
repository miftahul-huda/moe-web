var express = require('express');
var router = express.Router();
const path = require('path');


router.get('/:boardID', function (req, res){

    let boardID = req.params.boardID;
    var dir = __dirname;
    var p = path.resolve( dir, "../public/pages/", "dashboard");
    res.render(p, { info: { boardID: boardID } } )

})

router.get("", function(req, res){
    res.redirect("logger");
});


module.exports = router;