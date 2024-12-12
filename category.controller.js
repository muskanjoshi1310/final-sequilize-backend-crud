
import Category from "../model/category.model.js"
export const categoryList = (request,response,next)=>{
    Category.findAll({raw: true})
    .then(result=>{
      return response.status(200).json({category: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}
export const saveInBulk = (request,response,next)=>{
   Category.bulkCreate(request.body)
   .then(result=>{
    return response.status(201).json({message: "All category saved.."});
   }).catch(err=>{
    console.log(err);
    return response.status(500).json({error: "Internal Server Error"});
   })
}
export const deletCategory = (request,response,next)=>{
    let name = request.params.name;
    Category.destroy({where:{name}})
    .then(result=>{
      return result ? response.status(200).json({message: "Category removed.."}) : response.status(404).json({error: "Request resource not found | Category not exist"});
    }).catch(err=>{
        console.log(err);
    });
}
export const save = (request,response,next)=>{
    Category.create(request.body)
    .then(result=>{
        return response.status(201).json({message: "Category saved.."});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
    })
}