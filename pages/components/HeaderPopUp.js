import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import tw from 'twin.macro'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';

const tabs = [{ id: 1, href: "/", name: "Home" }, { id: 2, href: "/About", name: "About" }, { id: 3, href: "/ReachMe", name: "Reach Me" }]


const HeaderPopUp = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    const Icon = isVisible ?
        <CloseIcon css={tw`  w-full transition delay-500 ease-in   `} style={{ fontSize: "35px" }} /> :
        <MenuIcon css={tw`  w-full   `} style={{ fontSize: "35px" }} />;




    return (
        <div css={tw` `} >
            <button css={tw` mt-4 ml-24 focus:outline-none  `} onClick={() => setIsVisible(!isVisible)}  >{Icon}</button>

            {isVisible &&
                <div css={tw`absolute right-0  left-0 z-10 w-screen h-64  shadow-xl  text-center mt-20  bg-white   `}>
                    <ul css={tw`  mt-8`} >
                        {tabs.map(tab => (
                            <li key={tab.id} css={tw` mt-5 `} >
                                <Link href={tab.href}>
                                    <a css={tw`  hover:border-b-4 md:text-lg font-bold text-xl  md:font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900  hover:border-indigo-400 hover:text-indigo-500 hover:cursor-pointer p-2`}>{tab.name}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
            }


        </div>
    )
}

export default HeaderPopUp
