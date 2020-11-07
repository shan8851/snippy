import Layout from "../components/Layout";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
