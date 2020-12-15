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
        <div css={tw`flex justify-evenly items-center  md:mb-2  p-2  shadow-md    `}  >
            <Link href="/">
                <div css={tw` flex items-center cursor-pointer `} >
                    <Image src="/logo.png" width="50" height="50" css={tw`  object-contain`} />
                    <a css={tw` md:text-xl text-gray-700`} style={{ fontFamily: "ubuntu mono" }}>Publisher Factory</a>
                </div>



            </Link>

            {
                screenSize > 700 ?
                    <ul css={tw` flex  justify-evenly  items-center gap-5  `} >
                        {tabs.map(tab => (
                            <li key={tab.id} >
                                <Link href={tab.href}>
                                    <a css={tw` hover:border-b-4 text-lg   font-thin   hover:border-indigo-400 hover:text-indigo-500 hover:cursor-pointer p-2`}>{tab.name}</a>
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
