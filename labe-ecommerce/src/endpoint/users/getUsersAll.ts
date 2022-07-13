import { Request, Response } from "express";
import { usersAll } from "../../data/usersAll";

export const getUsersAll = async (req: Request, res: Response) => {
  let errorCode = 500;
  let name = req.query.name as string;
  let sort = req.query.name as string;
  let order = req.query.order as string;
  try {
    if (!name) {
      name = "%";
    }

    if (sort !== "name") {
      sort = "name";
    }
    if (!order) {
      order = "ASC";
    }

    const user = await usersAll(name, sort, order);
    res.status(200).send(user);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
};
