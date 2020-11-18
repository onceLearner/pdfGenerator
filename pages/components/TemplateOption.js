import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';



const TemplateOption = () => {
    return (
        <Link href="/template">
            <a css={tw` md:w-5/12    p-8 flex   flex-col items-center   shadow-lg hover:shadow-2xl transform  transition ease-in duration-300 hover:border-2 hover:border-pink-500    hover:-translate-y-2  h-64 hover:cursor-pointer bg-gradient-to-r from-pink-500 to-red-500`}>
                <div css={tw`text-center text-5xl font-extrabold leading-none mb-2 `}>
                    <span style={{ fontFamily: "montserrat" }} css={tw`bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-black `}>
                        Use Our Template
                     </span>

                </div>
                {/* <LibraryBooksIcon css={tw`text-5xl  text-gray-900`} /> */}

                <div css={tw`flex justify-evenly items-center p-3`}>
                    <p css={tw` text-center  text-sm text-gray-800 font-semibold mr-2 `} > use our  collections of ready-to-use templates </p>
                    <ArrowRightAltIcon css={tw` text-purple-700`} />
                </div>
            </a>
        </Link>
    )
}

export default TemplateOption
