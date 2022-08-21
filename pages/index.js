import Head from 'next/head';
import { useQuery } from 'urql';
import { PRODUCT_QUERY } from '../lib/query';
import Product from '../components/Product';

export default function Home() {
  // Fetch products from Strapi
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  // check for data coming in
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no.... {error.message}</p>;

  const products = data.products.data;
  // console.log(products);

  return (
    <div>
      <Head>
        <title>Storefront Homepage</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Hello Next</h1>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </main>
    </div>
  );
}
