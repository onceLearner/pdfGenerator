import React from 'react'
import Image from "next/image"
import Link from "next/link"
import tw from 'twin.macro'

const tabs = [{ id: 1, href: "/", name: "Home" }, { id: 2, href: "/About", name: "About" }, { id: 3, href: "/ReachMe", name: "Reach Me" }]

const Header = () => {
    return (
        <div css={tw`flex justify-evenly     `}>
            <Link href="/">
                <Image css={tw` hover:cursor-pointer object-cover`} src="/logo.png" height="100" width="150vw" />
            </Link>

            <ul css={tw` flex  justify-evenly gap-5 mt-8`} >
                {tabs.map(tab => (
                    <li key={tab.id} >
                        <Link href={tab.href}>
                            <a css={tw` hover:border-b-4 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900  hover:border-indigo-400 hover:text-indigo-500 hover:cursor-pointer p-2`}>{tab.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>


        </div >
    )
}

export default Header
