import '@/styles/globals.css';
import { Provider } from "../context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
    </Provider>
  )
}
