import { useState } from "react";
import ListingCard from "../components/ListingCard"
import { Grid } from "@mui/material"


export default function Home({ listings, loading, handlers,showAlert }) {


    return (
        <>
       
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