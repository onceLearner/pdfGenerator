import fs from "fs"
import path from "path"



export default (req, res) => {


    var erroris = "";


    const dirRelativeToPublicFolder = 'asset'

    const dir = path.resolve('./public', dirRelativeToPublicFolder);

    const filenames = fs.readdirSync(dir);
    const realPath = path.join(dir, "MusicSheet.pdf");


    try {
        // get the actual path of the project

        var byetsReaded = fs.readFileSync(realPath)



    } catch (error) {
        erroris = error;
    }


    res.statusCode = 200;
    res.send(byetsReaded)
}
