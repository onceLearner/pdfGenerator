import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";


const Home = () => {

  return (
    <div>
      <Head>
        <title>pdf Generator </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      </Head>

      <Header />
      <Footer />
    </div>
  )
}





export default Home;