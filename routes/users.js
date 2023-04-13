var express = require("express");
var router = express.Router();

const user = [
  {
    name: "Kuria",
    age: 20,
    sex: "female",
  },
];
var id = 1;

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send("respond with a resource");
});

router
  .get('/read-user', (req, res) => {
    return res.json(user);
  })

  router.post('/create-user', (req, res) => {
    user.push({
      name: req.body,
      id: ++id,
    });
    return res.json({ message: "Created", user });
  });

router.get('/read-user:id', (req, res) => {
  const user = user.find((val) => val.id === Number(req.params.id));
  return res.json(user);
});

module.exports = router;
