import React, { useState } from 'react'
import tw from 'twin.macro'

const Test2 = () => {
    const [clicked, setClicked] = useState(null)

    return (
        <div css={tw` p-12 space-y-8`}>
            <div css={tw` flex gap-8 items-center bg-green-100 p-2`} >
                <button css={tw` border p-2 bg-gray-200`} onClick={(evt) => { setClicked(1); }} >click me </button>
                <p>you clicked : {clicked}</p>
            </div>
            <div css={tw` flex gap-8 items-center bg-red-100`} >
                <button css={tw` border p-2 bg-gray-200`} onClick={() => setClicked(2)}>click me </button>
                <p> {clicked == 2 ? `you clicked : 2` : ` you clicked elsewehre`}</p>
            </div>

        </div>
    )
}

export default Test2
