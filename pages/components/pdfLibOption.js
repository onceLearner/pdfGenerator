import React, { useState } from 'react'
import tw from 'twin.macro'
import Image from 'next/image'
import Link from 'next/link'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';



const PdfLibOption = (props) => {

    return (
        <Link href="/pdfLib">
            <a css={tw` flex flex-col items-center p-8 md:w-5/12 w-full shadow-lg hover:border-2 hover:border-purple-500   h-64 hover:shadow-2xl transition ease-in duration-200   transform  hover:-translate-y-2 hover:cursor-pointer  bg-gradient-to-r  from-indigo-600 to-purple-500`}>
                <div css={tw`text-center text-5xl font-extrabold leading-none mb-8 `}>
                    <span style={{ fontFamily: "montserrat" }} css={tw`bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 `}>
                        Provide Your Pdf
                     </span>
                </div>
                <div css={tw`flex justify-between items-center p-2`}>
                    <p css={tw` text-center  text-sm text-gray-400 font-semibold  px-2`} > create custom pdf  using your files </p>
                    <ArrowRightAltIcon css={tw` text-purple-300`} />
                </div>

            </a>
        </Link>
    )
}

export default PdfLibOption
