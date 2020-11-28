import React, { useState } from 'react'

import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import tw from 'twin.macro'
import Header from './components/Header'
import Footer from './components/Footer'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const handlePdf = async (fileInputed, numPages) => {

    // create a  Bytes container for the inputed file

    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create()
    console.log(fileInputed)


    // load the pdf file to a pdf-lib 
    const copyFromPdf = await PDFDocument.load(await fileInputed);

    // // copy 1 st page fromthe file to the ouput file 
    const [copyfromPage] = await pdfDoc.copyPages(copyFromPdf, [0]);

    while (numPages) {
        pdfDoc.addPage(copyfromPage);
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
    return (
        <div>
            <Header />
            <div css={tw` flex flex-col items-center md:mt-16`} >
                <div css={tw` m-4   flex flex-col justify-center  items-center space-y-8 md:shadow-lg rounded-lg p-16 h-full w-full md:w-7/12  `} style={{ height: "40vh" }}>
                    <div css={tw` text-center bg-gradient-to-t from-gray-200 to-gray-300 rounded-md w-64   cursor-pointer hover:bg-gray-800  `}>
                        <input type="file" id="file" accept=".pdf" css={tw`w-64 h-1 hidden cursor-pointer`} onChange={evt => setFile(evt.target.files[0].arrayBuffer())} />
                        <label for="file" css={tw` p-4   text-gray-700  cursor-pointer font-semibold text-lg `}> Choose a file
                        <CloudUploadIcon css={tw`text-gray-700 m-4`} />
                        </label>
                    </div>
                    <div css={tw` mt-4  space-y-2 text-gray-600`}>
                        <label for="numPage">page Count </label>
                        <input type="text" css={tw` focus:outline-none focus:border-2 focus:border-blue-600  mr-2 border border-gray-500 p-2  w-full `} id="numPage" onChange={(evt) => setNumPages(evt.target.value)} placeholder="number of pages..." />
                    </div>

                    <button css={tw` border  border-blue-600  p-2 md:w-1/3  text-lg font-semibold  rounded-3xl  mb-8 text-blue-500 hover:text-white hover:bg-blue-500 w-full `} onClick={() => { handlePdf(file, numPages) }}>
                        generate pdf </button>
                </div>
            </div >
            <div css={tw`fixed bottom-0 `}>
                <Footer />
            </div>
        </div>
    )
}

export default PdfLib

