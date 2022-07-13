import { Request, Response } from "express"
import { insertUsers } from "../../data/insertUsers"
import { v4 as generateId } from 'uuid';
import transporter from "../mailTranporter";


export const createUsers = async (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const { name, email, password } = req.body
        if (
            !name ||
            !email ||
            !password
        ) {
            errorCode = 404
            throw new Error('"name", "email" and "password" are mandatory')
        }
       
        const id = generateId()
        await insertUsers(
            id,
            name,
            email,
            password
        )

        await transporter.sendMail({
            from: "<viniciusduartepasso@outlook.com>",
            to: email,
            subject: "Mensagem de confirmação",
            text: `Olá ${name}, sua conta foi criada!`,
            html: `<p>Olá ${name}, sua conta foi criada!</p>`
        })

        res.status(201).send("users create successfully")

    } catch (error: any) {
        console.log(error)
        res.status(errorCode).send(error.message)
    }
} 