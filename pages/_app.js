import '../global.css'
import Navbar from './Navbar/Navbar'

export default function MyApp({ Component, pageProps }) {
  return (
<>
  <Navbar/>
  
  <Component {...pageProps} />
  </>
  )
}
