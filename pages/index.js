import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BrowseByPet from '../components/BrowseByPet';
import TopRatedProducts from '../components/TopRatedProducts';
import ExpertGuides from '../components/ExpertGuides';
import Subscription from '../components/Subscription';
import CareServices from '../components/CareServices';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pawvera – Pet Care Done Right</title>
        <meta name="description" content="Quality food, wellness products, expert guidance & essential care solutions all in one place for your dog, cat or small pet." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Fredoka+One&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <BrowseByPet />
        <TopRatedProducts />
        <ExpertGuides />
        <Subscription />
        <CareServices />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
