import { connection } from '../../index';
import {Request, Response} from "express"
import { v4 as generateId } from 'uuid';
import { insertPurchases, Purchases } from '../../data/insertPurchases';


export const createPurchases = async (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const id = generateId()
        const {userId, productId } = req.body 
        const quantity = Number(req.body.quantity)
        if(!userId || !productId || !quantity){
            errorCode = 402
            throw new Error('"userId", "product", "quantity", are mandatory')
         }

       const users = await connection("labecommerce_users").select().where("id", userId)
       if(!users[0] ){
        errorCode = 404
        throw new Error('usuário não encontrado')
       }
       const product = await connection("labecommerce_products").select().where("id", productId)
       const totalPrice = product[0]?.price * quantity 
       const user_id : string = users[0].id 
       const product_id : string = product[0].id

       const labePurchases : Purchases = {id, user_id, product_id, quantity, totalPrice}
      
       await insertPurchases(labePurchases)
        
        res.status(201).send("purchase insert successfully")
    } catch (error : any) {
        console.log(error)
        res.status(errorCode).send(error.message)
    }
}