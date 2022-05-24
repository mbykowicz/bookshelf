import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Bookshelf</title>
        <meta name="description" content="Get an access to free books." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello in Bookshelf.
    </div>
  )
}
