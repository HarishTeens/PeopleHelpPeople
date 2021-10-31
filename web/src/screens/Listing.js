import { useEffect, useState } from "react";
import { useParams } from "react-router";
import apis from "../apis";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import PetitionView from "./PetitionView";
import CrowdsourceView from "./CrowdSourceView";


export default function Listing({ handlers, type = "PETITION", showAlert }) {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await apis.petition.get(id);
            setListing({ ...data, id: id });
        }
        fetchData();
    }, [])

    return listing ? (
        <>
            <Stack >
                {show && <Alert severity="success">Port Recieved</Alert>}
            </Stack>
            {listing.signs ? <PetitionView listing={listing} /> : <CrowdsourceView handlers={handlers} listing={listing} />}
        </>
    ) : (<div>Loading...</div>)

}