const express = require("express");
const router = express.Router();
const sessions = ["pruebasSession"];

// Middleware para la ruta '/api/login-sesion'
router.post("/", (req, res) => {

  const { cookies } = req;

  try{

    if(!cookies.sessionId) return res.sendStatus(401);
    console.log("sessionId " + sessionId);
    const userSession = sessions.find(
        (session) => "pruebasSession" === cookies.sessionId
    );
    
    if(!userSession) return res.sendStatus(401);

    res.json("Profile Sesion OK");
  }
  catch (err){
    return res.sendStatus(401);
  }
  

});

module.exports = router;
