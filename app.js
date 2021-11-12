const express = require ('express')
const path = require ('path')
const app = express ()

app.set("port", 3000)

app.listen(app.get("port"), () =>
    console.log("Servidor Corriendo") )


app.get('/', (req,res) =>   res.sendFile(path.resolve(__dirname,'./views/home.html')))
app.use(express.static(path.resolve(__dirname,'./public')))