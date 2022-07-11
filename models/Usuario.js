import { DataTypes } from "sequelize/types";
import db from '../config/db.js'

const Usuario = db.define('usuario',{
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    token:{
        type: DataTypes.STRING,
        allowNull: false
    },
    confirmado:{
        type: DataTypes.BOOLEAN,
    }
});

export default Usuario;
