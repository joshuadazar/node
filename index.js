const express= require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html");
})

app.listen(80, () => {
    
    console.log('server en puerto 80');
})