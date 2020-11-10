import Layout from "../components/Layout";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="max-w-2xl p-2 mx-auto">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
