import {Request, Response} from "express"
import { purchaseId } from '../../data/purchaseId';


export const getPurchase = async (req: Request, res: Response) => {
      let errorCode = 500
    try {
        const id = req.params.userId
        if(!id) {
            throw new Error("id not found")
        }
        const result = await purchaseId(id)

        if(result.length < 1) {
            throw new Error("not the registered purchase")
        }
     
        res.status(200).send(result)

    }  catch (error : any) {
        console.log(error)
        res.status(errorCode).send(error.message)
    }
}