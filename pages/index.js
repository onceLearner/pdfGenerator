import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TemplateOption from "./components/TemplateOption";
import PdfLibOption from "./components/pdfLibOption"

import tw from "twin.macro";
import MergeOpt from "./components/MergeOpt";
import RefactorOpt from "./components/refactorOpt";


const Home = () => {




  return (
    <>

      <Head>
        <title>Publisher Factory </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      </Head>

      <main css={tw` h-screen `}>
        <Header />
        <div css={tw`bg-gradient-to-b from-white to-indigo-100`}>

          <div css={tw` p-12 md:m-12   flex flex-wrap justify-evenly items-center gap-12 md:gap-20`} >
            <MergeOpt />
            <RefactorOpt />
            <TemplateOption />
            <PdfLibOption />


          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" d="M0,64L48,74.7C96,85,192,107,288,149.3C384,192,480,256,576,240C672,224,768,128,864,85.3C960,43,1056,53,1152,74.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <Footer />
      </main>
    </>
  )
}





export default Home;