import Head from 'next/head'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Dashboard.Earth</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        
        <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
          <p>Content</p>
        </main>

      <Footer></Footer>
      </div>
    </div>
  )
}
