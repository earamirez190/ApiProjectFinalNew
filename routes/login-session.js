const express = require("express");
const router = express.Router();

// Middleware para la ruta '/api/login-sesion'
router.post("/", (req, res) => {

  const {username, password } = req.body;
  if(!username || !password) return res.sendStatus(400);
  try{   

    res.cookie("sessionId", "pruebasSession", {
        httpOnly: true,
    });

    res.json("Login Sesion OK");

  }catch (err){
    return res.sendStatus(401);
  }
  
});

module.exports = router;
