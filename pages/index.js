import Head from 'next/head';
import {useRouter} from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import Hero from '../components/Slider';
import About from '../components/About';
import Services from '../components/Services';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';

export default function Home() {

  const Router = useRouter();

  return (
    <>
      <Head>
        <title>Webenix</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <About/>
      <Services/>
      <HireServies/>
      <Blog/>
    </>
  );
}
