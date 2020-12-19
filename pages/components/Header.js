import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import tw from 'twin.macro'
import MenuIcon from '@material-ui/icons/Menu'
import HeaderPopUp from './HeaderPopUp'

const tabs = [{ id: 1, href: "/", name: "Home" }, { id: 2, href: "/About", name: "About" }, { id: 3, href: "/ReachMe", name: "Reach Me" }]

// check to see if we are in the landing page
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

const Header = () => {
    const [isHome, setIsHome] = useState(checkIsHome())
    const [screenSize, setScreenSize] = useState(process.browser ? window.innerWidth : null);
    if (process.browser) window.onresize = () => { setScreenSize(window.innerWidth) }



    return (
        <div css={[tw`flex justify-between items-center   p-4  bg-gradient-to-b   border border-b  px-8   `, isHome ? tw`from-purple-500 to-purple-500  border-purple-400 ` : tw`from-white to-white`]}  >
            <Link href="/">
                <div css={tw` flex items-center cursor-pointer `} >
                    <Image src="/logo-white.png" width="40" height="30" css={tw`  object-contain`} />
                    <a css={[tw` md:text-xl text-xs text-white`, isHome ? tw`text-white` : tw`text-gray-800`]} style={{ fontFamily: "Audiowide" }} >Publisher Factory</a>
                </div>



            </Link>

            {
                screenSize > 700 ?
                    <ul css={tw` flex  justify-evenly  items-center gap-5  `} >
                        {tabs.map(tab => (
                            <li key={tab.id} >
                                <Link href={tab.href}>
                                    <a style={{ fontFamily: "Questrial" }} css={[tw` hover:border-b-4  text-lg   font-thin   hover:border-indigo-900 hover:text-indigo-900 hover:cursor-pointer p-2`, isHome ? tw`text-gray-100` : tw`text-gray-700`]}>{tab.name}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    : <HeaderPopUp />
            }

        </div >
    )
}

export default Header
