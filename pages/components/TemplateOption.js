import React from 'react'
import tw from 'twin.macro'

const TemplateOption = () => {
    return (
        <div css={tw` md:w-1/3 w-full  shadow-lg hover:shadow-2xl transform  hover:-translate-y-2  h-64 hover:cursor-pointer bg-gradient-to-r from-pink-500 to-red-500`}>
            <p css={tw` text-gray-100 text-center font-semibold text-xl`}>generate Pdf from Template</p>

        </div>
    )
}

export default TemplateOption
