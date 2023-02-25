import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

type LayoutProps = {
  children: React.ReactNode;
  title: string
}

const Layout = ({ children, title }: LayoutProps) => {
  const subTitle: string = title ? ' | ' + title : '';

  return (
    <>
      <Head>
        <title>{'AOC System' +subTitle}</title>
        <meta name="description" content="Az AOC System Zrt. alapvető célkitűzése és mindennapi motivációja, hogy hozzásegítse felhasználóit és jövőbeni ügyfeleit a nagyobb sikerek és eredmények eléréséhez, a folyamatos fejlődéshez." />
        <link rel="icon" href="https://aocsystem.com/favicon_aoc_dark_white.ico" />
      </Head>
      <Navbar />
      <div id="main" className="w-full min-h-screen flex flex-col mx-auto items-center">
        <ScrollToTop />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout;
