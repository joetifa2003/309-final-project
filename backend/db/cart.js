const CartItem=require("./schema/cartItem");
 async function addToCart(userID,productID){
    await CartItem.create({
         userID,
         productID
     })
 }