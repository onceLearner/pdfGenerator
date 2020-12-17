import fs from "fs"
import path from "path"
import Cors from 'cors'
// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}



export default (req, res) => {

    // Run the middleware
    await runMiddleware(req, res, cors)
    var erroris = "";
    const { query: { pdfTemplate } } = req;



    try {
        // get the actual path of the project
        var path1 = process.cwd();

        // read the file  
        var file = fs.readFileSync(path1 + "\\public\\asset\\" + pdfTemplate + ".pdf");

    } catch (error) {
        erroris = error;
    }


    res.statusCode = 200;
    res.send(file)
}
