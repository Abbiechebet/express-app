var express = require("express");
var router = express.Router();

const users = [
  {
    name: "Kuria",
    age: 20,
    sex: "female",
  },
  {
    name: "Birir",
    age: 25,
    sex: "male",
  },
];

/* GET users listing. */
router.get("/", (req, res) => {
  res.send("respond with a resource");
});

router.get("/get-user", (req, res) => {
  return res.json(users);
});

router.post("/create-user", (req, res) => {
  const userObject = req.body;
  users.push(userObject);
  res.status(201).json({
    status: "success",
    message: "User Created",
    users,
  });
});

router.get("/get-user/:name", (req, res) => {
  const name = req.params.name;
  const user = users.find(
    (user) => user.name.toLowerCase() === name.toLowerCase()
  );
  return res.json({
    status: "success",
    message: "User found",
    user,
  });
});
module.exports = router;
