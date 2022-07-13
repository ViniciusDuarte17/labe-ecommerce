import {Request, Response} from "express"

import { v4 as generateId } from 'uuid';
import { insertProduct } from "../../data/insertProduct";

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const {name, price, imageUrl} = req.body
        if( !name || !price || !imageUrl) {
            errorCode = 402
            throw new Error('"name", "price" and "imageUrl" are mandatory')
        }
        const id = generateId()
        await insertProduct(id,name, price , imageUrl)
        res.status(201).send("product insert successfully")

    } catch (error : any) {
        console.log(error)
        res.status(errorCode).send(error.message)
    }
} 