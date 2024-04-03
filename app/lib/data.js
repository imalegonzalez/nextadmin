import { User } from "./models"
import { connectToDb } from "./utils"

export const fetchUsers = async (q)=>{

    const regex = new RegExp(q,"i")

    try {
        connectToDb()
        const users = await User.find( {username: { $regex: regex}})
        return users
    } catch (error){
        console.log(error);
        throw new Error("No se pudo fetchear los users")
    }
}