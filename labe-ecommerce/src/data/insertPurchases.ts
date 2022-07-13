import { connection } from "..";

export type Purchases = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    totalPrice : number
}

export const insertPurchases = async (
  purchases: Purchases
) => {
    await connection("labecommerce_purchases")
    .insert(purchases)
}