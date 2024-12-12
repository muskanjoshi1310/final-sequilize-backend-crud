import Product from "../model/product.model.js"
export const saveInBulk = (request,response,next)=>{
    let data = [];
    for(let product of request.body.products){
        let name = product.category;
        delete product.category;
        product.categoryName = name;
        data.push(product);
    }
    Product.bulkCreate(data)
    .then(result=>{
        return response.status(201).json({message: "All product saved.."});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
    })
}