import { connection } from "..";

export const purchaseId = async (id: string) => {

   return connection
      .select("labecommerce_purchases.id", "name", "product_name", "quantity", "price", "totalPrice", "imageUrl")
      .from("labecommerce_purchases")
      .join("labecommerce_users", function () {
         this
            .on("labecommerce_purchases.user_id", "=", "labecommerce_users.id")
      })
      .join("labecommerce_products", function () {
         this
            .on("labecommerce_purchases.product_id", "=", "labecommerce_products.id")
      })
      .where("user_id", "=", id)

}