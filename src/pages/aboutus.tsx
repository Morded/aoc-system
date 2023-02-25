
import { type NextPage } from "next";
import AboutUslanding from "../components/AboutUsLanding";
import Layout from "../components/layout";
import Testimonials from "../components/Testimonals";
import TrustedBy from "../components/TrustedBy";
import TryDemoCTA from "../components/TryDemoCTA";

const Home: NextPage = () => {
  return (
    <Layout title="Rólunk">
      <AboutUslanding />
      {/* <TrustedBy /> */}
      {/* <Testimonials /> */}
      {/* <TryDemoCTA /> */}
    </Layout>
  )
};

export default Home;
