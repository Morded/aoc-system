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

const Home: NextPage = () => {
  return (
    <Layout title="A sikeres vállalkozások platformja">
        <Hero />
        <BusinessToBalance />
        <TrustedBy />
      <div className="overflow-x-hidden w-full min-h-screen flex flex-col mx-auto items-center justify-center">
        <HorizontalSection />
      </div>
        <ProductsHeader />
      <Products />
      <Testimonials />
      <TryDemoCTA />
    </Layout>
  )
};

export default Home;
