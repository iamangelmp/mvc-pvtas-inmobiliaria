import express from "express";
import userRouts from './routes/userRouts.js'

//Crear la app
const app = express();

//Habilita Pug
app.set('view engine', 'pug')
app.set('views', './views')

//Carpeta publica
app.use(express.static('public'))

//Routing
app.use('/auth', userRouts)

//Definir el puerto
const port =3000;
app.listen(port, ()=>{
    console.log('listening in port:',3000)
})