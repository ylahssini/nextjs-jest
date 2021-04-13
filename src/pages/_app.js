import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }) {
    return <SWRConfig value={{ dedupingInterval: 0 }}><Component {...pageProps} /></SWRConfig>
}

export default MyApp
