import React, { useState } from "react"
import styled from "@emotion/styled";
import tw from "twin.macro";
import jsPDf from "jspdf";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TemplateCard from "./components/TemplateCard";
import dataArray from "./comp_data/templateCardData"

const Button = styled.button`
${tw` focus:outline-none w-32 p-3 bg-white text-purple-600 border border-purple-700 hover:bg-purple-600 hover:text-white 
 transition duration-200 ease-in 
`}
`



const handeFile = (file) => {
    let doc = new jsPDf("p", "in", [6, 9]);


    for (let i = 1; i < 110; i++) {
        doc.addPage("p", "in", [8.625, 11.25]);
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
    console.log(dataArray)
    const [file, setFile] = useState("noFile");

    return (
        <div css={tw` flex flex-col h-screen`}>
            <Header />
            <div css={tw` flex flex-wrap  flex-auto  items-center justify-center gap-8 `}  >

                {
                    dataArray.map(card =>
                        <TemplateCard title={card.title} imgUrl={card.imgUrl} />
                    )
                }



            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}


export default Template
