import React, { useState } from "react"
import styled from "@emotion/styled";
import tw from "twin.macro";
import jsPDf from "jspdf";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TemplateCard from "./components/TemplateCard";
import { dataArray } from "./comp_data/templateCardData"

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

// to do: add div sitcky to chose size pages ... 

const Template = () => {
    console.log(dataArray)
    const [file, setFile] = useState("noFile");
    const [numPages, setNumPages] = useState(1)
    const [size, setsize] = useState({ width: 6, height: 9, isBleed: false });
    const [modal, setModal] = useState(false);
    const [templateChoosed, setTemplatechoosed] = useState("");
    return (
        <div css={tw`  flex flex-col h-screen`}>
            <Header />

            {modal && <div style={{ translate: "200vw" }} css={tw` z-20 fixed left-0 p-4 md:px-16   transform md:translate-x-1/2  scale-75 border border-gray-400  bg-gradient-to-r from-white to-gray-100 shadow-2xl   `}>

                <div css={tw`   flex flex-col  justify-center  items-center space-y-10   `} >

                    <div css={tw` flex space-x-6`}>
                        <p>you choosed: <span css={tw` text-lg font-bold`}>{templateChoosed}</span> </p>
                        <p onClick={() => setModal(false)} css={tw` hover:cursor-pointer hover:text-red-600 font-hairline absolute right-0 px-4`}>close</p>
                    </div>
                    <div css={tw` mt-4  space-y-2 text-gray-600`}>
                        <label for="numPage">page Count </label>
                        <input type="text" css={tw` rounded-md focus:outline-none focus:border-2 focus:border-blue-600  mr-2 border border-gray-500 p-2  w-full `} id="numPage" onChange={(evt) => setNumPages(evt.target.value)} placeholder="number of pages..." />
                    </div>
                    <div css={tw` space-x-3   flex  flex-wrap justify-center`}>
                        <input type="text" css={tw` border w-16 md:w-3/12 p-1`} onChange={(evt) => setsize({ ...size, width: evt.target.value })} placeholder="width" />
                        <input type="text" css={tw` border w-16 md:w-3/12 p-1`} onChange={(evt) => setsize({ ...size, height: evt.target.value })} placeholder="height " />
                        <div css={tw` flex gap-4 items-center md:pt-0 pt-4    `}>
                            <label for="bleed" css={tw` text-gray-700`} > bleed</label>
                            <input type="checkbox" name="bleed" value="bleed" onClick={(evt => { setsize({ ...size, isBleed: !size.isBleed }) })} />
                        </div>


                    </div>
                    <button css={tw` flex-none border-2  border-gray-700  p-2 md:w-1/3  text-lg font-semibold  rounded-3xl  mb-8 text-gray-800 hover:text-white hover:bg-blue-500 w-full `} onClick={() => { handlePdf(file, numPages, size, tempPg) }}>
                        Generate PDF </button>
                </div>

            </div>}

            <div css={tw` flex flex-wrap  flex-auto  items-center justify-center gap-8 `}  >

                {
                    dataArray.map(card =>
                        <TemplateCard modal={modal} template={templateChoosed} seTtemplate={setTemplatechoosed} click={setModal} title={card.title} imgUrl={card.imgUrl} />
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

