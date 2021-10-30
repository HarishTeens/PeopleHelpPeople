import { useEffect, useState } from "react";
import { useParams } from "react-router";
import apis from "../apis";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { TwitterIcon,TwitterShareButton} from "react-share"

import helpers from "../helpers";
export default function Listing({ handlers,type = "PETITION", showAlert }) {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [realtimeAttention, setRealtimeAttention] = useState(0);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await apis.petition.get(id);
            setListing({ ...data, id: id });
        }
        fetchData();
    }, [])

    return listing ? (<div>
        <Stack >
            {show && <Alert severity="success">Port Recieved</Alert>}
        </Stack>
        <h1> {listing?.name}</h1>
        <h2>{Object.keys(listing.signs).length} signed  </h2>        
        <p>{listing?.description}</p>
        {type === "PETITION" && <Button size="small" onClick={()=>helpers.petition.signHelper(handlers, showAlert, listing.id)}>Sign</Button>}
        {type === "COLLECTION" && (<><input type="text" placeholder="Recipient wallet address" value={handlers.recipient} onChange={(e) => handlers.setRecipient(e.target.value)} />
          <Button size="small" onClick={handlers.submitRecipient}>Donate</Button></>)}
        <TwitterShareButton>
            Share <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
    </div >) : (<div>Loading...</div>)

}