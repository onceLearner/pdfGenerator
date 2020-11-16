import React from 'react'
import Image from "next/image"
import Link from "next/link"
import tw from 'twin.macro'

const tabs = [{ id: 1, href: "/", name: "Home" }, { id: 2, href: "/About", name: "About" }, { id: 3, href: "/ReachMe", name: "Reach Me" }]

const Header = () => {
    return (
        <div css={tw`flex justify-evenly items-center  shadow-sm    `}>
            <Image src="/logo.png" height="80vh" width="90vw" />
            <ul css={tw` flex  justify-evenly gap-5`} >
                {tabs.map(tab => (
                    <li key={tab.id} >
                        <Link href={tab.href}>
                            <a css={tw` hover:border-b-4  hover:border-indigo-400 hover:text-indigo-500 hover:cursor-pointer p-2`}>{tab.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>


        </div >
    )
}

export default Header
