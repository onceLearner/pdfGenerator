import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import tw from 'twin.macro'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';

const tabs = [{ id: 1, href: "/", name: "Home" }, { id: 2, href: "/About", name: "About" }, { id: 3, href: "/ReachMe", name: "Reach Me" }]
const checkIsHome = () => {
    if (!process.browser) return true;
    switch (window.location.href) {
        case "http://localhost:3000/":
            return true;

        case "https://pdf-generator-steel.vercel.app/":
            return true;

        default:
            return false;

    }
}


const HeaderPopUp = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHome, setIsHome] = useState(checkIsHome());

    const Icon = isVisible ?
        <CloseIcon css={tw` text-gray-800`} style={{ fontSize: "29px" }} /> :
        <MenuIcon css={isHome && tw`  w-full text-white    `} style={{ fontSize: "29px" }} />;




    return (
        <div css={tw` `} >
            <button css={tw`  focus:outline-none  `} onClick={() => setIsVisible(!isVisible)}  >{Icon}</button>

            {isVisible &&
                <div css={tw`fixed left-0  top-0 z-10 w-screen h-screen  shadow-xl  text-center  bg-white   `}>
                    <div css={tw` flex justify-between p-4 border`}>
                        <p css={tw` text-lg text-purple-900`} style={{ fontFamily: "" }}>PF</p>
                        <button css={tw`  focus:outline-none  `} onClick={() => setIsVisible(!isVisible)}  >
                            {Icon}
                        </button>
                    </div>
                    <ul css={tw`  mt-8`} >
                        {tabs.map(tab => (
                            <li key={tab.id} css={tw` mt-5 `} style={{ fontFamily: "Questrial" }} >
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
