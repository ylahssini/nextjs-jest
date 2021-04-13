import Head from 'next/head';
import Home from '@components/home';

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Salam world | next.js with jest</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Home />
        </div>
    )
}
