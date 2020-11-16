import Image from 'next/image'
import React from 'react'
import tw from 'twin.macro'

const TemplateOption = () => {
    return (
        <div css={tw` md:w-5/12    p-8 flex   flex-col items-center   shadow-lg hover:shadow-2xl transform  hover:-translate-y-2  h-64 hover:cursor-pointer bg-gradient-to-r from-pink-500 to-red-500`}>
            <p css={tw` text-gray-100 text-center   font-mono text-xl mb-6`} style={{ fontFamily: "montserrat" }}>generate Pdf from Template</p>
            <Image src="/template.png" width="100vw" height="100vh" />

        </div>
    )
}

export default TemplateOption
