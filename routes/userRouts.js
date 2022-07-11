import express from "express";
import { formularioLogin, formularioRegister, registrar, formularioRecuperaPass } from "../controllers/userController.js";

const router = express.Router();

//Routting
// router.route('/')
//   .get(function (req, res) {
//     res.send("Home");
//   })

//   .post(function (req, res) {
//     res.json({ msg: "status 200" });
//   });

  router.get('/login', formularioLogin)

  router.get('/register', formularioRegister )
  router.post('/register', registrar )

  router.get('/recover', formularioRecuperaPass)

 


export default router;
