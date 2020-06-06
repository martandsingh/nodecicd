const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Hello World!'))
module.exports.sayhello = app.post('/sayhello', (req, res) => {
    var name = 'Guest!!'
    console.log("BODY: ")
    console.log(req.body)
    if(req.body != undefined && req.body.name != undefined){
        name=req.body.name;
    }
    res.send('Hello '+name)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))