import Activities from "@/components/Activities";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import FeaturedHomes from "@/components/FeaturedHomes";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import { holBaseUrl, holFetchApi } from "@/utils/fetchApi";

const Home = ({featuredHomes}) => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Booking />
      <FeaturedHomes featuredHomes={featuredHomes}/>
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const featuredHomes = await holFetchApi(`${holBaseUrl}/v2/hotels/search?units=metric&adults_number=1&checkout_date=2023-03-12&filter_by_currency=AED&checkin_date=2023-03-11&locale=en-gb&dest_id=8631929&order_by=popularity&dest_type=hotel&room_number=1&page_number=0&include_adjacency=true`);

  return {
    props: {
      featuredHomes: featuredHomes?.results
    },
  };
}

export default Home;
