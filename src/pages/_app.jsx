import WAuth from '../services/wAuth'
import '../style/globals.css'

export default function MyApp({ Component, pageProps }) {
  WAuth();
  return <Component {...pageProps} />
}
