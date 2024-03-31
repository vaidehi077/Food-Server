import express from 'express';
const app = express();
app.use(express.json());
const PORT = 5000;
app.get("/food_order",(req,res)=>{
    const {menu,price,quantity}=req.query;
    const total = parseInt(price)*parseInt(quantity
    const {users , city } = req.headers;
    res.json({
        message:`you have ordered ${quantity} ${menu}`,
        bill: `your total bill is ${total}`,
        details:`you are ${users} from ${city}`
    })
})
app.get("/food/:type",(req,res)=>{
    const {type}=req.params;
    if(type=="veg"){
       return res.json({
            message:`you have ordered ${type} food`
        })
    }
    else{
        res.json({
            message:`you have ordered Non-veg food`
        })
    }
    res.json({
       message:`your order was ${menu}`,
        bill: `your total bill is 400`,
    })
})
app.post('/user',(req,res)=>{
    const {name,age}=req.body
    res.json({
        message:`Hii ${name} you are ${age} years old`,
     })
})
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})