const express=require('express');
const app=express();
const PORT=3000;
app.use(express.json());

app.get('/alexa',(req,res)=>{
    res.json({"mensaje":"hola esta es una prueba"})
})

app.get('/miguel',(req,res)=>{
    res.json({"hola":"hola, mundo"})
})

app.post('/guardar',(req,res)=>{
    const {nombre,apellido} = req.body
    res.json({
        "dato_enviado":nombre,
        "dato_apellido":apellido,
        "mensaje":"esto es una prueba"
    })
})

/*PUERTO*/

app.listen(PORT,()=>{
    console.log("Servidor ejecutandose correctamente" + PORT)
})