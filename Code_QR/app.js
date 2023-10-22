const express = require("express")
const qrcode = require("qrcode")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/generarQR", (req, res)=>{
    const text= req.query.texto || "https://i.pinimg.com/originals/e7/8d/d2/e78dd24f3ae2d553c0b677841c9d6dd9.jpg"
    qrcode.toDataURL(text, (err, url)=>{
        if(err){
            res.status(500).send("Error al generar el codigo QR")
        }
        else{
            res.end(url)
        }
    })

})

app.use("/watch", express.static('static'))
/*  --Esto funciona y es similar a lo anterior pero viene directamente de la practica
app.use(express.static('static'))
app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'))
})
*/

app.listen(3000, ()=>{
    console.log("Server is running on 3000")
})