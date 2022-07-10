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

export {
    formularioLogin,
    formularioRegister
}