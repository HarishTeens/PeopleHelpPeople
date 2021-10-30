
import NFTCard from "../components/NFTCard"
import { Grid } from "@mui/material"

export default function Home({ nfts, loading, handlers }) {

    return (<Grid container spacing={2}>
        {
            nfts.length === 0 ?
                loading ? "loading..." : <h1>No Listings found</h1>
                :
                nfts.map(nft => (<Grid item xs={4}><NFTCard key={nft.id} nft={nft} handlers={handlers} /></Grid>))
        }
    </Grid>)
}