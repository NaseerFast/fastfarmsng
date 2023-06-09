import Feature from "../components/Feature";
import Products from "../components/Products";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import { Provider } from "react-redux";
import '../styles/styles.module.css';
// import '../styles/globals.css';
export default function Home() {
  return (
    <>
      <SeoHead title='LaslesVPN Landing Page' />
      <Layout>
        <Hero />
        <Feature />
        <Products />
      </Layout>
</>
  );
}
