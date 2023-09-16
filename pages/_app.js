import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="test-10xl font-bold">Nftverse Market</p>
        <div className="flex mt-4">
          <Link href="/" legacyBehavior>
            <a className="mr-4 text-pink-500">Home</a>
          </Link>
          <Link href="/create-nft" legacyBehavior>
            <a className="mr-6 text-pink-500">Sell NFT</a>
          </Link>
          <Link href="/my-nfts" legacyBehavior>
            <a className="mr-6 text-pink-500">MY NFTs</a>
          </Link>
          <Link href="/dashboard" legacyBehavior>
            <a className="mr-6 text-pink-500">Dashboard</a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
