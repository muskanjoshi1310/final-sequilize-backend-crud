import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
const Product = sequelize.define("product",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    categoryName: DataTypes.STRING,
    price: DataTypes.FLOAT,
    discountPercentage: DataTypes.FLOAT,
    rating: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    warrantyInformation: DataTypes.STRING,
    shippingInformation: DataTypes.STRING,
    availabilityStatus: DataTypes.STRING,
    thumbnail: DataTypes.STRING
});
export default Product;