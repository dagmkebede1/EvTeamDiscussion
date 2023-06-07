import {Sequelize} from "sequelize"
import {sequelize} from "../dbConfig/sequlizeConfig.js"

export const product = sequelize.define("Product", {
    id:{
        type:Sequelize.DOUBLE,
        primaryKey: true,
        autoIncrement:true,
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    desc:{
        type: Sequelize.STRING,
        allowNull: false
    }
},{timestamps:true})