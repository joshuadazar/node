const express= require('express')
const app = express()

app.get('/home', (req, res) => {
    res.sendFile(__dirname+"/index.html");
    // res.send('<h1>hola</h1><button>aceptar</button>');
})

app.listen(3000) 
    
    console.log('server en puerto 3000 y seguirá');

