import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
const Category = sequelize.define("category",{
  slug:{
    type: DataTypes.STRING
  },
  name:{
    type: DataTypes.STRING,
    primaryKey: true
  },
  url:{
    type: DataTypes.STRING
  }
});
export default Category;