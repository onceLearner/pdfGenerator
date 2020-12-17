import fs from "fs"
import path from "path"

export default (req, res) => {
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
