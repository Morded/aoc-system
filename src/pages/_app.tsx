import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import { Raleway, Roboto } from '@next/font/google'
import ScrollObserver from "../utils/ScrollObserver";

const roboto = Roboto({ 
  weight: ['400', '500', '700', '900'], 
  variable: '--font-roboto',
  subsets: ['latin-ext']
})

const raleway = Raleway({ 
  weight: '400', 
  variable: '--font-raleway',
  subsets: ['latin-ext']
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return ( 
    <ScrollObserver>
      <main className={`${roboto.variable} ${raleway.variable} font-sans min-h-screen`}>
        <Component {...pageProps} />
      </main>
    </ScrollObserver>
  )
};

export default MyApp;
