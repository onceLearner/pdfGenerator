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
        <div css={tw`flex justify-evenly  md:mb-1 mb-12     `}  >
            <Link href="/">
                <Image css={tw` hover:cursor-pointer object-cover`} src="/logo.png" height={screenSize > 700 ? `100` : `80`} width={screenSize > 700 ? `130vw` : `80vw`} />
            </Link>
            {screenSize > 700 ?
                <ul css={tw` flex  justify-evenly gap-5 mt-8`} >
                    {tabs.map(tab => (
                        <li key={tab.id} >
                            <Link href={tab.href}>
                                <a css={tw` hover:border-b-4 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900  hover:border-indigo-400 hover:text-indigo-500 hover:cursor-pointer p-2`}>{tab.name}</a>
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
