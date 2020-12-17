import fs from "fs"
import path from "path"
import Cors from 'cors'
import Template from "../../template"
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


    var erroris = "";
    const { query: { pdfTemplate } } = req;



    const dirRelativeToPublicFolder = 'asset'

    const dir = path.resolve('./public', dirRelativeToPublicFolder);
    const realPath = path.join(dir, `${Template}.pdf`);

    try {
        // get the actual path of the project


        // read the file  
        var file = fs.readFileSync(realPath);

    } catch (error) {
        erroris = error;
    }


    res.statusCode = 200;
    res.send(file)
}
