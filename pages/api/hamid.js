import fs from "fs"
import path from "path"



export default (req, res) => {


    var erroris = "";


    try {
        // get the actual path of the project
        var path1 = process.cwd();


    } catch (error) {
        erroris = error;
    }


    res.statusCode = 200;
    res.send({ pathIs: path1 })
}
