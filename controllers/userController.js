import Usuario from '../models/Usuario.js'

const formularioLogin = (req, res)=>{
     res.render('auth/login',{
        response: false,
        title: 'Login'
     })
}

const formularioRegister = (req, res)=>{
    res.render('auth/registro',{
        title: 'Registro',
        response: false
    });
}

const registrar = async (req, res)=>{
    //res.json({mesage:'Creando usuario...'})
    console.log(req.body)
    // const usuario = await Usuario.create(req.body);
    // res.json(usuario)
}

const formularioRecuperaPass = (req, res)=>{
    res.render('auth/recover',{
        title: 'Recupera password',
        response: false
    });
}

export {
    formularioLogin,
    formularioRegister,
    registrar,
    formularioRecuperaPass
}