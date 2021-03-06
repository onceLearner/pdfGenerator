import React from 'react'
import tw from 'twin.macro'
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub'
import FavoriteIcon from '@material-ui/icons/Favorite'

const handleClick = (url) => {
    window.open(url, "_blank")
}

const urlTwitter = "https://twitter.com/redaamir972";
const urlGithub = "https://github/oncelearner";

const Footer = () => {
    return (
        <div style={{ fontFamily: "montserrat", fontSize: "13px" }} css={tw`  flex justify-center flex-shrink-0 p-5  pt-8  w-screen bg-gray-100   `}>
            <div css={tw` flex justify-evenly gap-5`} >
                <p css={tw` text-gray-600 `}> Med Issati ©2020 </p>
                <TwitterIcon css={tw` text-gray-500 hover:text-gray-800 hover:cursor-pointer `} onClick={() => handleClick(urlTwitter)} />
                <GitHubIcon css={tw` text-gray-500 hover:text-gray-900 hover:cursor-pointer `} onClick={() => handleClick(urlGithub)} />
                <span css={tw` text-gray-500 font-thin`}> made with <FavoriteIcon css={tw` text-red-700 text-base`} />  Next.js</span>
            </div>

        </div>
    )
}

export default Footer
