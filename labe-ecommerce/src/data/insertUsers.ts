import { connection } from "../index";

export const insertUsers = async (
    id: string,
    name: string,
    email: string,
    password: string
) => {
    
    try {
        await connection("labecommerce_users")
        .insert({
            id,
            name,
            email,
            password
        })
    } catch (error : any) {
        return error.message
    }
} 