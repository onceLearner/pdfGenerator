import React from 'react'
import tw from 'twin.macro'

const PdfLibOption = () => {
    return (
        <div css={tw` md:w-1/3 w-full shadow-lg  h-64 hover:shadow-2xl transform  hover:-translate-y-2 hover:cursor-pointer  bg-gradient-to-r  from-indigo-600 to-purple-500`}>
            <p css={tw`  text-gray-100 text-center font-semibold text-lg  `}>Generate Pdf From Custom Pdf File</p>

        </div>
    )
}

export default PdfLibOption
