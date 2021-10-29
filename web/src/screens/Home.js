
import NFTCard from "../components/NFTCard"

export default function Home({ nfts, loading }) {

    return (<div>
        {
            nfts.length === 0 ?
                loading ? "loading..." : <h1>No Listings found</h1>
                :
                nfts.map(nft => (<NFTCard key={nft.id} nft={nft} />))
        }
    </div>)
}