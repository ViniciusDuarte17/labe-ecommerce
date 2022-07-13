import { connection } from "..";

export const usersAll = async (name:string, sort: string, order: string) => {
    return await connection("labecommerce_users").where("name", "like", `%${name}%`)
    .orderBy(sort,order)
} 