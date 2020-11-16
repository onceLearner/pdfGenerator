import React from 'react'
import tw from 'twin.macro'
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from "@material-ui/icons/Github"
import FavoriteIcon from '@material-ui/icons/Favorite'

const handleClick = (url) => {
    window.open(url, "_blank")
}

const urlTwitter = "https://twitter.com/redaamir972";
const urlGithub = "https://github/oncelearner";

const Footer = () => {
    return (
        <div css={tw` relative  md:fixed z-0 bottom-0 p-5 pt-8 border w-screen bg-gradient-to-r from-blue-500 to-indigo-700 flex justify-center `}>
            <div css={tw` flex justify-evenly gap-5`} >
                <p css={tw` text-gray-200 `}> Med Issati ©2020 </p>
                <TwitterIcon css={tw` text-gray-300 hover:text-gray-800 hover:cursor-pointer `} onClick={() => handleClick(urlTwitter)} />
                <GithubIcon css={tw` text-gray-300 hover:text-gray-900 hover:cursor-pointer `} onClick={() => handleClick(urlGithub)} />
                <span css={tw` text-gray-500 font-thin`}> made with <FavoriteIcon css={tw` text-red-700 text-base`} />  Next.js</span>
            </div>

        </div>
    )
}

export default Footer
