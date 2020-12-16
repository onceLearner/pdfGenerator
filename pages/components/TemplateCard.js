import React from 'react'
import tw from 'twin.macro'
import Image from "next/image"

const TemplateCard = () => {
    return (
        <div css={tw` flex flex-col w-auto  items-center hover:cursor-pointer transform  transition ease-in duration-150 hover:scale-105 hover:bg-gray-800    p-2  bg-gradient-to-br from-white to-gray-100 border border-gray-100 shadow-xl   `}>
            <p>this is a card</p>
            <div css={tw` object-contain `}>
                <Image src="/music.jpg" width="300" height="400" />
            </div>

        </div>
    )
}

export default TemplateCard
