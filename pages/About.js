import React from 'react'
import tw from 'twin.macro'
import Footer from './components/Footer'
import Header from './components/Header'


const About = () => {
    return (
        <div css={tw` flex flex-col h-screen`} >
            <Header />
            <div css={tw`   flex flex-auto justify-center mt-12 p-10`}>
                <div css={tw` shadow-md h-64 w-full md:w-1/3  text-center rounded-lg    `} >
                    <p css={tw` p-2 text-2xl text-gray-900 `}>what is Pdf Generator ? </p>
                    <p css={tw` text-gray-600 text-lg  `} >
                        Pdf Generator is a Utility Wep App to help designer , Kdp user create staf they use daily
              </p>


                </div >
            </div>
            <Footer />
        </div>
    )
}

export default About
