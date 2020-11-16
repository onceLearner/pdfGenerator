import React from 'react'
import tw from 'twin.macro'
import Image from 'next/image'


const PdfLibOption = () => {
    return (
        <div css={tw` flex flex-col items-center p-8 md:w-5/12 w-full shadow-lg  h-64 hover:shadow-2xl transform  hover:-translate-y-2 hover:cursor-pointer  bg-gradient-to-r  from-indigo-600 to-purple-500`}>
            <p css={tw`  text-gray-100 text-center font-mono text-lg mb-8   `} style={{ fontFamily: "montserrat" }} >Generate Pdf From Custom Pdf File</p>
            <Image src="/pdfLib.png" width="100vw" height="100vh" />

        </div>
    )
}

export default PdfLibOption
