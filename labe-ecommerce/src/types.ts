export type Purchase2 = {
    id: string,
    user: string,
    product: string,
    quantity: number,
    price: number,
    totalPrice: number
}

// console.log(result)
// const userId = result[0].user_id as string
// const productId = result[0].product_id as string
// const user = await connection("labecommerce_users").select("name").where("id", "=", userId)
// const product = await connection("labecommerce_products").select("name", "price").where("id", "=", productId)

// const purchase : Purchase2 = {
//     id: result[0].id,
//     user: user[0].name,
//     product: product[0].name,
//     quantity: result[0].quantity,
//     price: product[0].price,
//     totalPrice: result[0].totalPrice
// }
