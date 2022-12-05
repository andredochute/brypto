import Head from 'next/head'

const Fallback = () => (
  <>
    <Head>
      <title>Offline - Brypto</title>
    </Head>
    <div className="body">
        <h1>Oops...</h1>
        <h1>Parece que você não está conectado à internet</h1>
    </div>
  </>
)

export default Fallback