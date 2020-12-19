import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import tw from 'twin.macro'
import MenuIcon from '@material-ui/icons/Menu'
import HeaderPopUp from './HeaderPopUp'

const tabs = [{ id: 1, href: "/", name: "Home" }, { id: 2, href: "/About", name: "About" }, { id: 3, href: "/ReachMe", name: "Reach Me" }]

const Header = () => {
    const [screenSize, setScreenSize] = useState(process.browser ? window.innerWidth : null);
    if (process.browser) window.onresize = () => { setScreenSize(window.innerWidth) }



    return (
        <div css={tw`flex justify-between items-center   p-4  bg-gradient-to-b from-purple-500 to-purple-500   border border-b border-purple-400    `}  >
            <Link href="/">
                <div css={tw` flex items-center cursor-pointer `} >
                    <Image src="/logo-white.png" width="40" height="30" css={tw`  object-contain`} />
                    <a css={tw` md:text-xl text-xs text-white`} style={{ fontFamily: "Audiowide" }} >Publisher Factory</a>
                </div>



            </Link>

            {
                screenSize > 700 ?
                    <ul css={tw` flex  justify-evenly  items-center gap-5  `} >
                        {tabs.map(tab => (
                            <li key={tab.id} >
                                <Link href={tab.href}>
                                    <a style={{ fontFamily: "Questrial" }} css={tw` hover:border-b-4 text-gray-100 text-lg   font-thin   hover:border-indigo-400 hover:text-indigo-500 hover:cursor-pointer p-2`}>{tab.name}</a>
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
