import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';



const TemplateOption = () => {
    return (
        <Link href="/template">

            <a css={tw` md:w-5/12    p-8 flex   flex-col items-center   shadow-lg hover:shadow-2xl transform  transition ease-in duration-300 hover:border-2 hover:scale-110     h-64 hover:cursor-pointer bg-gradient-to-r from-gray-100 to-gray-300`}>
                <div css={tw`text-center text-5xl font-extrabold leading-none mb-2 `}>
                    <span style={{ fontFamily: "montserrat" }} css={tw`bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-black `}>
                        Use Our Template
                     </span>

                </div>


                <div css={tw`flex justify-evenly items-center p-3`}>
                    <p css={tw` text-center  text-sm text-gray-800 font-semibold mr-2 `} > use our  collections of ready-to-use templates </p>
                    <ArrowRightAltIcon css={tw` text-purple-700`} />
                </div>
            </a>
        </Link>
    )
}

export default TemplateOption
