import fs from "fs"
import path from "path"



export default (req, res) => {


    var erroris = "";


    const dirRelativeToPublicFolder = 'asset'

    const dir = path.resolve('./public', dirRelativeToPublicFolder);

    const filenames = fs.readdirSync(dir);

    try {
        // get the actual path of the project
        var path1 = process.cwd();


    } catch (error) {
        erroris = error;
    }


    res.statusCode = 200;
    res.send({ pathIs: filenames, erro: erroris })
}
