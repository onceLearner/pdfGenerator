import React from 'react'
import tw from 'twin.macro'
import Image from "next/image"

const TemplateCard = (props) => {
    return (
        <div style={{ background: "rgb(1,2,4,0.2)" }} css={tw` flex flex-col md:w-3/12  w-auto space-y-6 m-8 items-center hover:cursor-pointer transform  transition ease-in duration-150 hover:scale-105 bg-white hover:bg-opacity-50    p-2  bg-gradient-to-br from-white to-gray-100 border border-gray-100 shadow-xl   `}>
            <p style={{ fontFamily: "Questrial" }}> {props.title}</p>
            <div css={tw` object-contain `}>
                <Image src={`/${props.imgUrl}`} width="300" height="400" />
            </div>

        </div>
    )
}

export default TemplateCard
