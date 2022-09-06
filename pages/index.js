import Head from 'next/head';
import {useRouter} from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import Hero from '../components/Slider';
import About from '../components/About';
import Services from '../components/Services';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import { data } from "../data/Seo";


export default function Home() {

  const Router = useRouter();

  return (
    <>
      <Head>
        <title>{data.home.title}</title>
        <meta name="description" content={data.home.description}/>
        <meta name="keywords" content={data.home.keyword} />
      </Head>
      <Hero/>
      <About/>
      <Services/>
      <HireServies/>
      <Blog/>
    </>
  );
}
