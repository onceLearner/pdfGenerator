import React, { useState } from 'react'
import tw from 'twin.macro'
import Image from 'next/image'
import Link from 'next/link'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';



const RefactorOpt = (props) => {

    return (
        <Link href="/refactor">
            <a css={tw` flex flex-col items-center p-8 md:w-5/12 w-full shadow-lg rounded-2xl hover:border-2 hover:border-gray-600   h-64 hover:shadow-2xl transition ease-in duration-200  hover:scale-110  transform  hover:-translate-y-2 hover:cursor-pointer  bg-gradient-to-r  from-white to-gray-100`}
                style={{ height: "60vh" }}>
                <div css={tw` bg-indigo-300  p-6  rounded-full transform  md:m-4 `}>
                    {/* <Image src="/merge3.jpg" width="150" height="150" css={tw` rounded-full `} /> */}
                    <svg enable-background="new 0 0 32 32" css={tw` w-16 h-16`} id="svg2" version="1.1" viewBox="0 0 32 32" space="preserve" xmlns="http://www.w3.org/2000/svg" cc="http://creativecommons.org/ns#" dc="http://purl.org/dc/elements/1.1/" inkscape="http://www.inkscape.org/namespaces/inkscape" rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" svg="http://www.w3.org/2000/svg"><g id="background"><rect fill="none" height="32" width="32" /></g><g id="document_x5F_text_x5F_settings"><path fill="#4f61d0" d="M24,14.059V5.584L18.414,0H0v32h24v-0.059c4.499-0.5,7.998-4.309,8-8.941C31.998,18.366,28.499,14.556,24,14.059z    M17.998,2.413L21.586,6h-3.588V2.413z M2,30V1.998h14v6.001h6v6.06c-1.752,0.194-3.352,0.89-4.652,1.941H4v2h11.517   c-0.412,0.616-0.743,1.289-0.994,2H4v2h10.059C14.022,22.329,14,22.661,14,23c0,2.829,1.308,5.351,3.349,7H2z M23,29.883   c-3.801-0.009-6.876-3.084-6.885-6.883c0.009-3.801,3.084-6.876,6.885-6.885c3.799,0.009,6.874,3.084,6.883,6.885   C29.874,26.799,26.799,29.874,23,29.883z M20,12H4v2h16V12z" /><path fill="#af61d0" d="M28,24v-2.001h-1.663c-0.063-0.212-0.145-0.413-0.245-0.606l1.187-1.187l-1.416-1.415l-1.165,1.166   c-0.22-0.123-0.452-0.221-0.697-0.294V18h-2v1.662c-0.229,0.068-0.446,0.158-0.652,0.27l-1.141-1.14l-1.415,1.415l1.14,1.14   c-0.112,0.207-0.202,0.424-0.271,0.653H18v2h1.662c0.073,0.246,0.172,0.479,0.295,0.698l-1.165,1.163l1.413,1.416l1.188-1.187   c0.192,0.101,0.394,0.182,0.605,0.245V28H24v-1.665c0.229-0.068,0.445-0.158,0.651-0.27l1.212,1.212l1.414-1.416l-1.212-1.21   c0.111-0.206,0.201-0.423,0.27-0.651H28z M22.999,24.499c-0.829-0.002-1.498-0.671-1.501-1.5c0.003-0.829,0.672-1.498,1.501-1.501   c0.829,0.003,1.498,0.672,1.5,1.501C24.497,23.828,23.828,24.497,22.999,24.499z" /></g></svg>

                </div>
                <div css={tw`text-center text-3xl font-extrabold leading-none mb-8 `}>
                    <span style={{ fontFamily: "montserrat" }} css={tw`bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 `}>
                        Refactor your Pdf
                     </span>
                </div>
                <div css={tw`flex justify-between items-center p-2`}>
                    <p css={tw` text-center  text-sm text-gray-600 font-semibold  px-2`}
                        style={{ fontFamily: "Montserrat" }} > keep the original pdf and add your touches by you can resize your documents the way you want</p>
                    <ArrowRightAltIcon css={tw` text-purple-300`} />
                </div>

            </a>
        </Link>
    )
}

export default RefactorOpt;
