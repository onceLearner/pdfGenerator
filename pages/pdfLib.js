import React, { useState } from 'react'

import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import tw from 'twin.macro'
import Header from './components/Header'
import Footer from './components/Footer'

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

            <div css={tw` m-12  p-12`}>
                <input type="text" onChange={(evt) => setNumPages(evt.target.value)} css={tw` mr-2 border border-gray-500 p-2 `} placeholder="number of pages..." />
                <input type="file" accept=".pdf" onChange={evt => setFile(evt.target.files[0].arrayBuffer())} />

                downnload file
            <button css={tw` border  border-blue-600   m-4 p-2 text-blue-500 hover:text-white hover:bg-blue-500 `} onClick={() => { handlePdf(file, numPages) }}> generate pdf </button>



            </div >
            <Footer />
        </div>
    )
}

export default PdfLib

