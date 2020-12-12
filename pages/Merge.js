import React, { useState } from 'react'

import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import tw from 'twin.macro'
import Header from './components/Header'
import Footer from './components/Footer'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const handleMerge = async (file1, file2) => {

    // create a  Bytes container for the inputed file

    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create()



    // load the pdf file to a pdf-lib 
    const copyFromPdf1 = await PDFDocument.load(await file1);
    const copyFromPdf2 = await PDFDocument.load(await file2);

    // getting the page counts of the two pdfs
    const pageCount1 = copyFromPdf1.getPageCount();
    const pageCount2 = copyFromPdf2.getPageCount();

    // copy pdf1 inside the new pdf
    for (let i = 0; i < pageCount1; i++)  pdfDoc.addPage(await copyFromPdf1.copyPages[i]);

    // copy pdf2 inside the new pdf
    for (let i = 0; i < pageCount2; i++)  pdfDoc.addPage(await copyFromPdf2.copyPages[i]);



    // // // copy 1 st page fromthe file to the ouput file 
    // const [copyfromPage] = await pdfDoc.copyPages(copyFromPdf, [2]);





    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()
    var blob = new Blob([pdfBytes], { type: "application/pdf" });// change resultByte to bytes
    window.open(window.URL.createObjectURL(blob))
}

const Merge = () => {
    const [file1, setFile1] = useState('');
    const [file2, setFile2] = useState("");
    const [numPages, setNumPages] = useState(1)
    const [size, setsize] = useState({ width: 6, height: 9, isBleed: false });

    return (
        <div css={tw` flex flex-col h-screen`}>

            <Header />
            <div css={tw`flex-auto flex flex-col items-center md:mt-6`} >

                <div css={tw`   flex flex-col  justify-center  items-center space-y-10 md:shadow-lg    rounded-lg mb-8 p-16 lg:h-full w-full  md:w-7/12  `} >
                    <div css={tw` text-sm text-gray-600 font-extrabold transform -translate-y-8`}>remark : files should be uploaded in the same order as these buttons below </div>
                    <div css={tw` text-center bg-gradient-to-t from-gray-200 to-gray-300 rounded-md w-64   cursor-pointer hover:bg-gray-800  `}>
                        <input type="file" id="file" accept=".pdf" css={tw`w-64 h-1 hidden cursor-pointer`} onChange={evt => setFile1(evt.target.files[0].arrayBuffer())} />
                        <label for="file" css={tw` p-4   text-gray-700  cursor-pointer font-semibold text-lg `}> select the first file
                        <CloudUploadIcon css={tw`text-gray-700 m-4`} />
                        </label>
                    </div>
                    <div css={tw` text-center bg-gradient-to-t from-gray-200 to-gray-300 rounded-md w-64   cursor-pointer hover:bg-gray-800  `}>
                        <input type="file" id="file" accept=".pdf" css={tw`w-64 h-1 hidden cursor-pointer`} onChange={evt => setFile2(evt.target.files[0].arrayBuffer())} />
                        <label for="file" css={tw` p-4   text-gray-700  cursor-pointer font-semibold text-lg `}> select the second file
                        <CloudUploadIcon css={tw`text-gray-700 m-4`} />
                        </label>
                    </div>

                    <button css={tw` flex-none border-2  border-gray-700  p-2 md:w-1/3  text-lg font-semibold  rounded-3xl  mb-8 text-gray-800 hover:text-white hover:bg-blue-500 w-full `} onClick={() => { handleMerge(file1, file2) }}>
                        Merge   </button>
                </div>
            </div >
            <div css={tw` mt-8`}>
                <Footer />
            </div>
        </div>
    )
}

export default Merge;