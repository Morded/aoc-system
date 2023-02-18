import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

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
      <div className="w-full min-h-screen flex flex-col mx-auto items-center justify-center overflow-x-hidden">
        {children}
      </div>
    </>
  )
}

export default Layout;
