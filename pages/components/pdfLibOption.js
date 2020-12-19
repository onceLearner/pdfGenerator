import React, { useState } from 'react'
import tw from 'twin.macro'
import Image from 'next/image'
import Link from 'next/link'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';



const PdfLibOption = (props) => {

    return (
        <Link href="/pdfLib">
            <a css={tw` flex flex-col items-center p-8 md:w-5/12 w-full shadow-lg rounded-2xl hover:border-2 hover:border-purple-100   h-64 hover:shadow-2xl transition ease-in duration-200   transform  hover:scale-110 hover:cursor-pointer  bg-gradient-to-r  from-gray-100 to-gray-300`} style={{ height: "40vh" }}
                style={{ height: "60vh" }}>
                <div css={tw` bg-indigo-300 rounded-full  transform  md:m-4 `}>
                    {/* <Image src="/merge3.jpg" width="150" height="150" css={tw` rounded-full `} /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" css={tw` w-32 h-32`} viewBox="0 0 300 180">
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#0FB2B8" fill-rule="nonzero"
                                d="M252 164a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM275 78a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                            <path fill="#0FB2B8" d="M263 150v-2h1v2h2v1h-2v2h-1v-2h-2v-1z" />
                            <path fill="#0FB2B8" fill-rule="nonzero"
                                d="M40 29a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM242 42a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM65.806 18.194a.661.661 0 0 1 0 .935l-1.403 1.403a.661.661 0 1 1-.935-.935l1.403-1.403a.661.661 0 0 1 .935 0zm-3.274 3.274a.661.661 0 0 1 0 .935l-1.403 1.403a.661.661 0 1 1-.935-.935l1.403-1.403a.661.661 0 0 1 .935 0zm3.274 2.338a.661.661 0 0 1-.935 0l-1.403-1.403a.661.661 0 1 1 .935-.935l1.403 1.403a.661.661 0 0 1 0 .935zm-3.274-3.274a.661.661 0 0 1-.935 0l-1.403-1.403a.661.661 0 1 1 .935-.935l1.403 1.403a.661.661 0 0 1 0 .935zM256.806 26.194a.661.661 0 0 1 0 .935l-1.403 1.403a.661.661 0 0 1-.935-.935l1.403-1.403a.661.661 0 0 1 .935 0zm-3.274 3.274a.661.661 0 0 1 0 .935l-1.403 1.403a.661.661 0 0 1-.935-.935l1.403-1.403a.661.661 0 0 1 .935 0zm3.274 2.338a.661.661 0 0 1-.935 0l-1.403-1.403a.661.661 0 1 1 .935-.935l1.403 1.403a.661.661 0 0 1 0 .935zm-3.274-3.274a.661.661 0 0 1-.935 0l-1.403-1.403a.661.661 0 0 1 .935-.935l1.403 1.403a.661.661 0 0 1 0 .935zM27.806 88.194a.661.661 0 0 1 0 .935l-1.403 1.403a.661.661 0 1 1-.935-.935l1.403-1.403a.661.661 0 0 1 .935 0zm-3.274 3.274a.661.661 0 0 1 0 .935l-1.403 1.403a.661.661 0 1 1-.935-.935l1.403-1.403a.661.661 0 0 1 .935 0zm3.274 2.338a.661.661 0 0 1-.935 0l-1.403-1.403a.661.661 0 1 1 .935-.935l1.403 1.403a.661.661 0 0 1 0 .935zm-3.274-3.274a.661.661 0 0 1-.935 0l-1.403-1.403a.661.661 0 1 1 .935-.935l1.403 1.403a.661.661 0 0 1 0 .935z" />
                            <path fill="#0FC0C5" d="M62 36h61l24 24v85a2 2 0 0 1-2 2H62a2 2 0 0 1-2-2V38a2 2 0 0 1 2-2z" />
                            <path fill="#FFF" d="M123 36l24 24h-23a1 1 0 0 1-1-1V36z" opacity=".3" />
                            <path fill="#0B8E91" d="M155 36h61l24 24v85a2 2 0 0 1-2 2h-83a2 2 0 0 1-2-2V38a2 2 0 0 1 2-2z" />
                            <path fill="#FFF" d="M216 36l24 24h-23a1 1 0 0 1-1-1V36z" opacity=".3" />
                            <path fill="#FFF" fill-rule="nonzero"
                                d="M190.91 133.455l17.726-17.728-2.363-2.363-17.728 17.727 2.364 2.364zm-1.183 1.181l-2.363-2.363-.693.692v2.364h2.364l.692-.693zM206.273 111l4.727 4.727L189.727 137H185v-4.727L206.273 111z" />
                            <path fill="#0FB2B8" fill-rule="nonzero" d="M37 113a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                            <path fill="#FFF" fill-rule="nonzero"
                                d="M164.15 137.44v-2.01c5.31-5.13 8.64-8.49 8.64-11.4 0-2.01-1.11-3.3-3.15-3.3-1.47 0-2.7.99-3.72 2.13l-1.92-1.92c1.74-1.86 3.48-2.94 6.09-2.94 3.66 0 6.03 2.31 6.03 5.85 0 3.39-3.15 6.87-6.93 10.86.99-.09 2.25-.21 3.18-.21h4.68v2.94h-12.9zM71 137v-2.82h4.26v-12.54h-3.51v-2.16c1.89-.36 3.21-.84 4.41-1.56h2.58v16.26h3.75V137H71z" />
                        </g>
                    </svg>

                </div>

                <div css={tw`text-center text-3xl font-extrabold leading-none mb-8 `}>
                    <span style={{ fontFamily: "montserrat" }} css={tw`bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-800 `}>
                        Generate Pdf based on your Template
                     </span>
                </div>
                <div css={tw`flex justify-between items-center p-2`}>
                    <p css={tw` text-center  text-sm text-gray-800 font-semibold  px-2`}
                        style={{ fontFamily: "Montserrat" }}>

                        create custom pdf  using your files: upload your template, specy your needs and download your new Document!
                     </p>
                    <ArrowRightAltIcon css={tw` text-purple-300`} />
                </div>

            </a>
        </Link>
    )
}

export default PdfLibOption
