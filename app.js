/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.hello = (req, res) => res.send('Hello World!')

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.sayhello = (req, res) => {
    var name = 'Guest!!'
    console.log("BODY: ")
    console.log(req.body)
    if(req.body != undefined && req.body.name != undefined){
        name=req.body.name;
    }
    res.send('Hello '+name + ". Welcome to Google Cloud Function")
}

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
    let message = req.query.message || req.body.message || 'Hello World!';
    res.status(200).send(message);
  };
  
