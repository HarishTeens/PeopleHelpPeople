import { useState } from "react";
import ListingCard from "../components/ListingCard"
import { Grid } from "@mui/material"

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Home({ listings, loading, handlers }) {
    const [show, setShow] = useState(false);
    
    const showAlert = () => {
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 5000);
    };

    return (
        <>
        <Stack >
            {show && <Alert severity="success">Your petition was signed successfully. Please wait for the network to update.</Alert>}
        </Stack>
        <Grid container spacing={2}>
        {
            listings.length === 0 ?
                loading ? "loading..." : <h1>No Listings found</h1>
                :
                listings.map(listing => (<Grid item xs={4}><ListingCard showAlert={showAlert} key={listing.id} listing={listing} handlers={handlers} /></Grid>))
        }
            </Grid>
            </>)
}