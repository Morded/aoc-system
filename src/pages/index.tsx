import { type NextPage } from "next";
import BusinessToBalance from "../components/BusinessToBalance";
import Hero from "../components/Hero";
import HorizontalSection from "../components/HorizontalSection";
import Layout from "../components/layout";
import Products from "../components/Products";
import ProductsHeader from "../components/ProductsHeader";
import Testimonials from "../components/Testimonals";
import TrustedBy from "../components/TrustedBy";
import TryDemoCTA from "../components/TryDemoCTA";
import Works from "../components/works";

const Home: NextPage = () => {
  return (
    <Layout title="A sikeres vállalkozások platformja">
      <Hero />
      <BusinessToBalance />
      <TrustedBy />
      {/* <HorizontalSection /> */}
      <ProductsHeader />
      {/* <Works /> */}
      <Products />
      <Testimonials />
      <TryDemoCTA />
    </Layout>
  )
};

export default Home;
