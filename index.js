const express = require('express')
const mongoose = require('mongoose')
const Person = require('./models/Person')
const app = express()
app.use(
    express.urlencoded({
        extended : true,
        }),
)
app.post('/person', async (req,res)=>{
    const {nome,salario,aprovado}= req.body
    const person = {
        nome, 
        salario,
        aprovado,
    }
    try {
        await Person.create(person)
        res.status(201).json({message:'Pessoa inserida no sistema com sucesso!'})
    } catch (error) {  
        res.status(500).json({erro:error})
    }
})
app.use(express.json())
app.get("/",(req,res) => {
    res.json({message: "Oi Express!"})
})
mongoose.connect('mongodb+srv://megara:Aselecao5@cluster0.fdih591.mongodb.net/?retryWrites=true&w=majority')
.then(()=> { console.log('Conectado ao Banco!');app.listen(3000)
})
.catch((err) => console.log(err))