import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/custom.scss'
import Layout from "@/komponenten/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
