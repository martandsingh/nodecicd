const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/sayhello', (req, res) => {
    var name = 'Guest!!'
    if(req.query.name != undefined){
        name=req.query.name;
    }
    res.send('Hello '+name)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))