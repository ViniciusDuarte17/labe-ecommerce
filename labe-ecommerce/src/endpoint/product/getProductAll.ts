import {Request, Response} from "express";
import { productAll } from "../../data/productAll";


export const getProductAll = async (req: Request, res: Response) => {
    let errorCode = 500
    let name = req.query.name as string
    let sort = req.query.name as string
    let order = req.query.order as string
    try {
        if(!name){
        name = "%" 
        }
 
        if(sort !== "product_name" ) {
            sort = "product_name"
        }
        if(!order) {
            order = "ASC"
        }

      const user = await productAll(name, sort, order) 
   
        res.status(200).send(user)

    } catch (error : any) {
        res.status(errorCode).send(error.message)
    }
} 