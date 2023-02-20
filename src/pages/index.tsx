import { type NextPage } from "next";
import BusinessToBalance from "../components/BusinessToBalance";
import Hero from "../components/Hero";
import HorizontalSection from "../components/HorizontalSection";
import Layout from "../components/layout";
import Products from "../components/Products";
import ProductsHeader from "../components/ProductsHeader";
import ScrollToTop from "../components/ScrollToTop";
import Testimonials from "../components/Testimonals";
import TrustedBy from "../components/TrustedBy";

const Home: NextPage = () => {
  return (
    <Layout title="A sikeres vállalkozások platformja">
      <ScrollToTop />
      <Hero />
      <BusinessToBalance />
      <TrustedBy />
      <HorizontalSection />
      <ProductsHeader />
      <Products />
      <Testimonials />
    </Layout>
  )
};

export default Home;
