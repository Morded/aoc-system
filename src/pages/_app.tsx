import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import localFont from '@next/font/local'
import ScrollObserver from "../utils/ScrollObserver";
import SizeObserver from "../utils/SizeObservers";

const roboto = localFont({
  src: [
    {
      path: '../../public/fonts/Roboto/Roboto-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Bold.ttf',
      weight: '700',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Black.ttf',
      weight: '900',
    },
  ],
  variable: '--font-roboto',
})

const raleway = localFont({
  src: [
    {
      path: '../../public/fonts/Raleway/static/Raleway-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Raleway/static/Raleway-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-raleway',
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return ( 
    <SizeObserver>
      <ScrollObserver>
        <main className={`${roboto.variable} ${raleway.variable} font-sans min-h-screen`}>
          <Component {...pageProps} />
        </main>
      </ScrollObserver>
    </SizeObserver>
  )
};

export default MyApp;
