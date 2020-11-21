import styled from '@emotion/styled'
import React, { useState } from 'react'
import tw from 'twin.macro'
import Footer from './components/Footer'
import Header from './components/Header'
import DataUsageIcon from '@material-ui/icons/DataUsage';

const InputName = styled.input`
${tw` focus:outline-none border   p-3 m-4  w-full focus:border-indigo-400  `}
`
const InputEmail = styled.input`
${tw` focus:outline-none border  w-full p-3  m-4  mb-8  focus:border-indigo-400 `}
`
const TextArea = styled.textarea`
${tw` border  h-64 w-full   focus:border-indigo-400 focus:outline-none`}
`
const Button = styled.button`
${tw` focus:outline-none w-32 p-3 bg-white text-purple-600 border border-purple-700 hover:bg-purple-600 hover:text-white 
 transition duration-200 ease-in  mt-6
`}
`


const ReachMe = () => {
    const [isSpin, setIsSpin] = useState(false)

    return (
        <>
            <Header />
            <div css={tw`flex justify-center items-center  `} >


                <div css={tw` md:shadow-md md:p-8 p-2 m-8 md:w-2/3 w-full  flex justify-center  flex-col items-center    `}>
                    <p css={tw`text-lg  text-gray-900 font-hairline`}> Please Fill this Form </p>
                    <div css={tw` flex flex-wrap items-stretch justify-center `}>
                        <InputName placeholder="enter your name" />
                        <InputEmail placeholder="enter your email " />
                        <TextArea placeholder=" Hi ! I am reaching you ...." />


                    </div>
                    <Button onClick={() => { setIsSpin(true); setTimeout(() => setIsSpin(false), 2000) }} >{isSpin ? "Send" : "Sent! Thanks"}
                        {isSpin && <DataUsageIcon css={[isSpin && tw` animate-spin`]} />}

                    </Button>

                </div>

            </div>
            <Footer />

        </>
    )
}

export default ReachMe
