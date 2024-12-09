// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import MainPage from '../pages/MainPage'



export default function Home() {
  return (
    <div className="description-section">
      <Head>
        <title>Elbrit Landing Page</title>
        <meta name="description" content="Elbrit Life Sciences - Your partner in health" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <MainPage/>
        </div>
        </main>
    </div>
  );
}


