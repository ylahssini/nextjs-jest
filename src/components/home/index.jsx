import useSWR from 'swr'
import fetcher from '@utils/fetcher';

export default function Home() {
    const { data, error } = useSWR('/api/products', fetcher)

    if (error) return <div>Error</div>;

    console.log('data', data);

    return (
        <>
            <h1>Salam world</h1>
            { !data ? <div>loading...</div> : (
                <ul role="list">
                    {data.map((item) => (
                        <li key={item.id}>
                            {item.name} ${item.price.toFixed(2)}
                        </li>
                    ))}
                </ul>
            ) }
        </>
    )
}