import PetitionCard from "../components/PetitionCard"
import CrowdSourceCard from "../components/CrowdSourceCard"
import { Grid } from "@mui/material"


export default function Home({ listings, loading, handlers,showAlert,type }) {


    return (
        <>
       
        <Grid container spacing={2}>
        {
            listings.length === 0 ?
                loading ? "loading..." : <h1>No {type} data found</h1>
                        :
                        type ==="PETITION"?                
                            listings.map(listing => (<Grid item xs={4}><PetitionCard showAlert={showAlert} key={listing.id} listing={listing} handlers={handlers} /></Grid>))
                            :listings.map(listing => (<Grid item xs={4}><CrowdSourceCard showAlert={showAlert} key={listing.id} listing={listing} handlers={handlers} /></Grid>))
        }
            </Grid>
            </>)
}