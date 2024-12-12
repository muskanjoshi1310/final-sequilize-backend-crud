
import CartItems from "../model/cart-items.model.js";
import Cart from "../model/cart.model.js";
import Product from "../model/product.model.js";
/*
   1. User peforming first time add-to-cart operation
   2. User performing second time add-to-cart operation
*/
export const addToCart = async (request,response,next)=>{
    let {userId, productId} = request.body;
    try{
       let cart = await Cart.findOne({where:{userId}});
       console.log(cart);
       if(cart){
         let status = await CartItems.findOne({where:{cartId:cart.dataValues.id,productId}});
         if(status)
           return response.status(200).json({message: "Item is already added in cart"});
         await CartItems.create({cartId: cart.dataValues.id,productId});  
         return response.status(201).json({message: "Item successfully added in cart"});
       }
       else{
         let cart =  await Cart.create({userId});
         let cartId = cart.dataValues.id;
         let cartItems = await CartItems.create({productId,cartId});  
         return response.status(201).json({message: "Item added in cart.."});
       }
    }
    catch(err){
        return response.status(500).json({error: "Internal Server Error"});
    }
}
export const getCartItems = async (request,response,next)=>{
   let userId = request.params.userId;
   let itemList = await Cart.findAll({where:{userId},raw: true,include:[{model: Product, required: true}]});
   return response.status(200).json({"cart-item-list": itemList});
}