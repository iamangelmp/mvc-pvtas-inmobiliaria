const formularioLogin = (req, res)=>{
     res.render('auth/login',{
        response: false
     })
}

const formularioRegister = (req, res)=>{
    res.render('auth/registro',{});

}

export {
    formularioLogin,
    formularioRegister
}