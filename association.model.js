import CartItems from "./cart-items.model.js";
import Cart from "./cart.model.js";
import Category from "./category.model.js";
import Product from "./product.model.js";
import User from "./user.model.js";
console.log("Association Executed........");
Category.hasMany(Product,{foreignKey: "categoryName"});
Product.belongsTo(Category,{
    foreignKey: "categoryName", targetKey: "name"
});
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product,{through: CartItems});
Product.belongsToMany(Cart,{through: CartItems});
export {Category,Product, CartItems};