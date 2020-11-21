import React, { useState } from "react"
import styled from "@emotion/styled";
import tw from "twin.macro";
import jsPDf from "jspdf";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Button = styled.button`
${tw` focus:outline-none w-32 p-3 bg-white text-purple-600 border border-purple-700 hover:bg-purple-600 hover:text-white 
 transition duration-200 ease-in 
`}
`



const handeFile = (file) => {
    let doc = new jsPDf("p", "in", [6, 9]);


    for (let i = 1; i < 120; i++) {
        doc.addPage("p", "in", [6, 9]);
        doc.setLineWidth(0.01);
        let iteration = 17;
        while (iteration) {

            doc.line(0.4, iteration / 2, 5.6, iteration / 2);
            iteration--;
        }

    }
    window.open(doc.output("bloburl"))


}


const Template = () => {
    const [file, setFile] = useState("noFile");

    return (
        <div>
            <Header />
            <div css={tw` flex items-center justify-center `}  >
                <div css={tw`  `} >
                    <input type="file" accept=".pdf" css={tw` `} onChange={e => setFile(e.target.files[0].name)} />

                    <Button onClick={() => handeFile(file)} > generate pdf  </Button>
                </div>


            </div>
            <div css={tw`fixed bottom-0`}>
                <Footer />
            </div>
        </div>

    )
}


export default Template
