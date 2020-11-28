import React from 'react'
import tw from 'twin.macro'

const Test = () => {
    return (
        <div css={tw` flex flex-col flex-shrink h-screen  `}>
            <div css={tw` bg-red-300 flex-auto`}>1</div>
            <div css={tw` bg-red-600 flex-auto p-12`}>2</div>
            <div css={tw` bg-red-900 h-32`}>4</div>


        </div>
    )
}

export default Test
