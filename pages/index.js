import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <>
      <SeoHead title='LaslesVPN Landing Page' />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
</>
  );
}
