import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TemplateOption from "./components/TemplateOption";
import PdfLibOption from "./components/pdfLibOption"

import tw from "twin.macro";


const Home = () => {


  return (
    <>
      <Head>
        <title>pdf Generator </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      </Head>
      <main css={tw` h-full`}>
        <Header />
        <div css={tw` p-12 md:m-12   flex flex-wrap justify-evenly items-center gap-8`} >
          <TemplateOption />
          <PdfLibOption />

        </div>

        <Footer />
      </main>
    </>
  )
}





export default Home;