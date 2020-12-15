import React from 'react'
import tw from 'twin.macro'

const TemplateCard = () => {
    return (
        <div css={tw` flex flex-col  items-center hover:cursor-pointer transform  transition ease-in duration-150 hover:scale-105    w-32 h-64 p-2  bg-gradient-to-br from-white to-gray-100 shadow-xl  `}>
            this is a card
        </div>
    )
}

export default TemplateCard
