var express = require('express');
var router = express.Router();

const user = [{
  name:"Kuria",
  age: 20,
  sex: "female"
}];
var id = 1;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json('respond with a resource');
});

router
  .route("/users")
  .get((req, res) => {
    return res.json({user});
  })

  .post((req, res) => {
    user.push({
      name: req.body,
      id: ++id,
    });
    return res.send({ message: "Created" });
  });

router
  .route("/:id")
  .get((req, res) => {
    const user = user.find((val) => val.id === Number(req.params.id));
    return res.send({user});
  })

module.exports = router;
