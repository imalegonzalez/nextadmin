import { User, Product } from "./models"
import { connectToDb } from "./utils"

export const fetchUsers = async (q, page, ITEM_PER_PAGE)=>{

    const regex = new RegExp(q,"i")

    // const ITEM_PER_PAGE = 2;

    try {
        connectToDb();
        const count = await User.find( {username: { $regex: regex}}).count();
        const users = await User.find( {username: { $regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE*(page-1));
        return {count, users };
    } catch (error){
        console.log(error);
        throw new Error("No se pudo fetchear los users");
    }
}

export const fetchSingleUser = async (id) => {
    try {
        await connectToDb();
        const user = await User.findById(id);
        
        // console.log(user)
        return user.toObject()
    } catch (error){
        console.log(error);
        throw new Error("No se pudo encontrar usuario por id");
    }
}

export const fetchProducts = async (q, page, ITEM_PER_PAGE)=>{

    const regex = new RegExp(q,"i")

    // const ITEM_PER_PAGE = 2;

    try {
        connectToDb();
        const count = await Product.find( {title: { $regex: regex}}).count();
        const products = await Product.find( {title: { $regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE*(page-1));
        return {count, products};
    } catch (error){
        console.log(error);
        throw new Error("No se pudo fetchear los users");
    }
}