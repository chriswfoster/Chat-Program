var express = require("express")
var routes = express.Router()

routes.get("/api/login", (req, res) => {
    req.app
      .get("db")
      .getItems()
      .then(response => res.status(200).json(response))
  })
  
  routes.post("/api/register", (req, res) => {
      const dbInstance = req.app.get("db")
      const bcrypt = req.app.get("bcrypt")
      console.log(req.body)
      const { username, password } = req.body
      const saltRounds = 10
    
      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
          dbInstance
            .registerUser(username, hash)
            .then(response => res.status(200).json(response))
        })
      })
    }
  )




module.exports = routes
