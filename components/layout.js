import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>SaveYourPrimos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="SaveYourPrimos" />
        {children}
      </main>

      <Footer />
    </div>
  );
}
