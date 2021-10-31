import PetitionCard from "../components/PetitionCard"
import CrowdSourceCard from "../components/CrowdSourceCard"
import { Grid } from "@mui/material"
import apis from "../apis";

import { useEffect, useState } from "react";


export default function Home({ handlers, showAlert, type }) {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCrowdsource = async () => {
            setLoading(true);
            const data = type === "PETITION" ? await apis.petition.getAll() : await apis.crowdsource.getAll();
            console.log(data);
            const hydratedCrowdsource = await Promise.all(Object.keys(type === "PETITION" ? data.petitions : data.collections).map(async cid => {
                const collectionData = await apis.crowdsource.get(cid);
                return { ...collectionData, id: cid };
            }))
            setListings(hydratedCrowdsource);
            setLoading(false);
        };
        fetchCrowdsource();
    }, []);


    return (
        <>

            <Grid container spacing={2}>
                {
                    listings.length === 0 ?
                        loading ? "loading..." : <h1>No {type} data found</h1>
                        :
                        type === "PETITION" ?
                            listings.map(listing => (<Grid item xs={4}><PetitionCard showAlert={showAlert} key={listing.id} listing={listing} handlers={handlers} /></Grid>))
                            : listings.map(listing => (<Grid item xs={4}><CrowdSourceCard showAlert={showAlert} key={listing.id} listing={listing} handlers={handlers} /></Grid>))
                }
            </Grid>
        </>)
}