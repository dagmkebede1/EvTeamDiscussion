// const {Sequelize} = require("sequelize")
import {Sequelize} from "sequelize"
// import {product} from "../model/product.js"

export const sequelize = new Sequelize("sequ", "root", "", {
    host:"localhost",
    dialect:"mysql"
})

sequelize.authenticate().then(()=>console.log("DB connected !")).catch((err)=>console.log(err))







