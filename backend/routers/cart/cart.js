const express=require("express");
const { authenticated}=require("../auth/auth");
const {addTOCart}=require("../../db/cart");
const router=express.Router();
router.post("/add",authenticated,async (req,res)=>{
    const userID=req.user.id;
    const{productID}=req.body;
    await addTOCart(userID,productID);
})