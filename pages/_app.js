import Header from "@/components/Header";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

//vorerst einfache fetcher funktion

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      {/* <SWRConfig value={{ fetcher }}> */}
      {/* <Header /> */}
      <Component {...pageProps} />
      {/* </SWRConfig> */}
    </>
  );
}
