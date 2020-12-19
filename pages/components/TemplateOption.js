import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';



const TemplateOption = () => {
    return (
        <Link href="/template">

            <a css={tw` md:w-5/12    p-8 flex   flex-col items-center  rounded-2xl w-full  shadow-lg hover:shadow-2xl transform  transition ease-in duration-300 hover:border-2 hover:scale-110     h-64 hover:cursor-pointer bg-gradient-to-r from-gray-100 to-gray-300`}
                style={{ height: "60vh" }}>

                <div css={tw` bg-indigo-300 rounded-full  transform  p-4 md:m-4 `}>
                    {/* <Image src="/merge3.jpg" width="150" height="150" css={tw` rounded-full `} /> */}
                    <svg css={tw` w-24 h-24`} xmlns="http://www.w3.org/2000/svg" name="Layer 1" viewBox="0 0 64 80" ><title>x</title><path d="M61.93,58.41H35a1.5,1.5,0,0,1-1.5-1.5V34a1.5,1.5,0,0,1,1.5-1.5H61.93a1.5,1.5,0,0,1,1.5,1.5v22.9A1.5,1.5,0,0,1,61.93,58.41Zm-25.39-3H60.43V35.51H36.54Z" /><path d="M45.89,44.29h-5a1.5,1.5,0,0,1,0-3h5a1.5,1.5,0,0,1,0,3Z" /><path d="M51.89,51h-11a1.5,1.5,0,0,1,0-3h11a1.5,1.5,0,0,1,0,3Z" /><path d="M53.52,45.74A3.79,3.79,0,1,1,57.31,42,3.79,3.79,0,0,1,53.52,45.74Zm0-5.07a1.29,1.29,0,0,0,0,2.57,1.29,1.29,0,1,0,0-2.57Z" /><path d="M24.87,31.49a3.79,3.79,0,1,1,3.79-3.79A3.79,3.79,0,0,1,24.87,31.49Zm0-5.08a1.29,1.29,0,1,0,1.29,1.29A1.28,1.28,0,0,0,24.87,26.41Z" /><path d="M40.87,29.2H32.3a1.5,1.5,0,1,1,0-3h8.57a1.5,1.5,0,0,1,0,3Z" /><path d="M29.74,37.54H22.35a1.5,1.5,0,0,1,0-3h7.39a1.5,1.5,0,1,1,0,3Z" /><path d="M29.74,44.33H22.35a1.5,1.5,0,0,1,0-3h7.39a1.5,1.5,0,0,1,0,3Z" /><path d="M29.74,51.12H22.35a1.5,1.5,0,0,1,0-3h7.39a1.5,1.5,0,1,1,0,3Z" /><path d="M9.37,17.62a3.79,3.79,0,1,1,3.78-3.79A3.79,3.79,0,0,1,9.37,17.62Zm0-5.07a1.29,1.29,0,1,0,1.28,1.28A1.28,1.28,0,0,0,9.37,12.55Z" /><path d="M25.52,15.08h-9a1.25,1.25,0,0,1,0-2.5h9a1.25,1.25,0,0,1,0,2.5Z" /><path d="M11.9,25.61H6.83a1.5,1.5,0,1,1,0-3H11.9a1.5,1.5,0,0,1,0,3Z" /><path d="M11.9,33.74H6.83a1.5,1.5,0,0,1,0-3H11.9a1.5,1.5,0,0,1,0,3Z" /><path d="M11.9,41.87H6.83a1.5,1.5,0,1,1,0-3H11.9a1.5,1.5,0,0,1,0,3Z" /><path d="M11.9,50H6.83a1.5,1.5,0,1,1,0-3H11.9a1.5,1.5,0,0,1,0,3Z" /><path d="M31,56.91v-1.5H19V22.05H44.21v8h3V20.55a1.5,1.5,0,0,0-1.5-1.5H17.5a1.5,1.5,0,0,0-1.5,1.5V56.91a1.5,1.5,0,0,0,1.5,1.5H31.34A4,4,0,0,1,31,56.91Z" /><path d="M13.5,56.91v-1.5H3.57V8.59H28.78v8h3V7.09a1.5,1.5,0,0,0-1.5-1.5H2.07a1.5,1.5,0,0,0-1.5,1.5V56.91a1.5,1.5,0,0,0,1.5,1.5H13.8A4,4,0,0,1,13.5,56.91Z" />
                    </ svg>
                </div>
                <div css={tw`text-center text-3xl font-extrabold leading-none mb-2 `}>
                    <span style={{ fontFamily: "montserrat" }} css={tw`bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-black `}>
                        Use Our Template
                     </span>

                </div>


                <div css={tw`flex justify-evenly items-center p-3`}>
                    <p css={tw` text-center  text-sm text-gray-800 font-semibold mr-2 `}
                        style={{ fontFamily: "Montserrat" }}> we have a large collection of ready-to-use templates, provide your specification and enjoy latest templates!
                    </p>
                    <ArrowRightAltIcon css={tw` text-purple-700`} />
                </div>
            </a>
        </Link >
    )
}

export default TemplateOption


