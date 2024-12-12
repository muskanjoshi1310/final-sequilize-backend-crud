import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcrypt from "bcryptjs";
const User = sequelize.define("user",{
    id:{
          type:DataTypes.INTEGER,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        set(v){
           console.log("Inside setter "+v); 
           let saltKey = bcrypt.genSaltSync(10);
           let encryptedPassword = bcrypt.hashSync(v,saltKey);
           this.setDataValue("password",encryptedPassword);
        }
    },
    email:{
        type: DataTypes.STRING,
  }
});

//isse mei gadbad  ho sakti h.