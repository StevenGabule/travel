import Theme from '@/components/Theme'
import '@/styles/globals.css'

import { Poppins } from 'next/font/google'
import Head from 'next/head'

const inter = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ['latin']
})


export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Travel Website with NextJS</title>
        <meta name='description' content='Learn about travel website' />
        <link rel="icon" href="/fav-icon.png" />
    </Head>
    <div className={inter.className}>
      <Theme />
      <Component {...pageProps} />
    </div>
    </>
  )
}
