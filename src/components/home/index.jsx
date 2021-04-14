import useSWR from 'swr'
import fetcher from '@utils/fetcher';

export default function Home() {
    const { data, error } = useSWR('/api/products', fetcher)

    if (error) return <div role="error">Error to get data</div>;

    return (
        <>
            <h1>Salam world</h1>
            { !data ? <div>loading...</div> : (
                <>
                    { data.length > 0 ? (
                        <ul role="list">
                            {data.map((item) => (
                                <li key={item.id}>
                                    {item.name} ${item.price.toFixed(2)}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p role="empty">No products found</p>
                    )}
                </>
                
            ) }
        </>
    )
}