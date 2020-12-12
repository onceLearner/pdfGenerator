import React, { useState } from 'react'

import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import tw from 'twin.macro'
import Header from './components/Header'
import Footer from './components/Footer'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const handlePdf = async (fileInputed, numPages, size, templatePage) => {

    // create a  Bytes container for the inputed file

    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create()
    console.log(fileInputed)



    // load the pdf file to a pdf-lib 
    const copyFromPdf = await PDFDocument.load(await fileInputed);

    // // copy 1 st page fromthe file to the ouput file 
    const [copyfromPage] = await pdfDoc.copyPages(copyFromPdf, [templatePage]);

    // set the size  1 inch => 72  unit
    const { x, y, height, width } = await copyfromPage.getTrimBox();
    console.log({ height, width });


    const bleedMarginW = size.isBleed ? 9 : 0;
    const bleedMarginH = size.isBleed ? 18 : 0;
    const pageWidth = size.width * 72 + bleedMarginW;
    const pageheight = size.height * 72 + bleedMarginH;


    while (numPages) {
        pdfDoc.addPage(copyfromPage).setTrimBox(0, 0, pageWidth, pageheight);
        numPages--
    }




    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()
    var blob = new Blob([pdfBytes], { type: "application/pdf" });// change resultByte to bytes
    window.open(window.URL.createObjectURL(blob))
}

const PdfLib = () => {
    const [file, setFile] = useState('');
    const [numPages, setNumPages] = useState(1)
    const [size, setsize] = useState({ width: 6, height: 9, isBleed: false });
    const [tempPg, setTempPg] = useState(1);

    return (
        <div css={tw` flex flex-col h-screen`}>

            <Header />
            <div css={tw`flex-auto flex flex-col items-center md:mt-6`} >

                <div css={tw`   flex flex-col  justify-center  items-center space-y-10 md:shadow-lg    rounded-lg mb-8 p-16 lg:h-full w-full  md:w-7/12  `} >
                    <div css={tw` text-center bg-gradient-to-t from-gray-200 to-gray-300 rounded-md w-64   cursor-pointer hover:bg-gray-800  `}>
                        <input type="file" id="file" accept=".pdf" css={tw`w-64 h-1 hidden cursor-pointer`} onChange={evt => setFile(evt.target.files[0].arrayBuffer())} />
                        <label for="file" css={tw` p-4   text-gray-700  cursor-pointer font-semibold text-lg `}> Choose a file
                        <CloudUploadIcon css={tw`text-gray-700 m-4`} />
                        </label>
                    </div>
                    <div css={tw` mt-4  space-y-2 text-gray-600`}>
                        <label for="numPage">page Count </label>
                        <input type="text" css={tw` rounded-md focus:outline-none focus:border-2 focus:border-blue-600  mr-2 border border-gray-500 p-2  w-full `} id="numPage" onChange={(evt) => setNumPages(evt.target.value)} placeholder="number of pages..." />
                    </div>
                    <div css={tw` space-x-3   flex  flex-wrap justify-center`}>
                        <input type="text" css={tw` border w-24 md:w-3/12 p-1`} onChange={(evt) => setsize({ ...size, width: evt.target.value })} placeholder="width" />
                        <input type="text" css={tw` border w-24 md:w-3/12 p-1`} onChange={(evt) => setsize({ ...size, height: evt.target.value })} placeholder="height " />
                        <div css={tw` flex gap-4 items-center md:pt-0 pt-4    `}>
                            <label for="bleed" css={tw` text-gray-700`} > bleed</label>
                            <input type="checkbox" name="bleed" value="bleed" onClick={(evt => { setsize({ ...size, isBleed: !size.isBleed }) })} />
                        </div>
                        <div css={tw` m-6 pt-4 flex flex-col space-y-4 `}>
                            <label for="bleed" css={tw` text-gray-700 text-sm`} > enter the page number we will use to generate the template </label>
                            <input type="text" css={tw`border md:w-11/12 p-1`} onChange={(evt) => { setTempPg(evt.target.value) }} placeholder="page number" />
                        </div>

                    </div>
                    <button css={tw` flex-none border-2  border-gray-700  p-2 md:w-1/3  text-lg font-semibold  rounded-3xl  mb-8 text-gray-800 hover:text-white hover:bg-blue-500 w-full `} onClick={() => { handlePdf(file, numPages, size, tempPg) }}>
                        Generate PDF </button>
                </div>
            </div >
            <div css={tw` mt-8`}>
                <Footer />
            </div>
        </div>
    )
}

export default PdfLib

