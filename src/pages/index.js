import Banner from '@/components/Banner';
import Destination from '@/components/Destination';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Nearby from '@/components/Nearby';
import Search from '@/components/Search';
import Subscribe from '@/components/Subscribe';
import Testimonials from '@/components/Testimonials';
import Trending from '@/components/Trending';

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Search />
      <Trending />
      <Destination />
      <Nearby />
      <Testimonials />
      <Subscribe />
      <Footer />
    </main>
  )
}
