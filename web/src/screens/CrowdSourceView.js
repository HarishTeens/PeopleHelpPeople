import { Button } from "@mui/material"
import helpers from "../helpers"

import { TwitterIcon, TwitterShareButton } from "react-share"

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import apis from "../apis";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function CrowdsourceView({ showAlert, handlers }) {
    const { id } = useParams();
    const [crowdsource, setCrowdsource] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await apis.crowdsource.get(id);
            setCrowdsource({ ...data, id: id });
        }
        fetchData();
    }, [])

    return crowdsource ? (
        <>
            <Stack >
                {show && <Alert severity="success">Port Recieved</Alert>}
            </Stack>
            <div >
                <h1> {crowdsource?.name}</h1>
                <h2>{crowdsource?.funds.raised.toFixed(2)} so far of {crowdsource?.funds.goal.toFixed(2)} goal </h2>
                <p>{crowdsource?.description}</p>

                <input type="text" placeholder="Recipient wallet address" value={handlers.recipient} onChange={(e) => handlers.setRecipient(e.target.value)} />
                <Button size="small" onClick={handlers.submitRecipient}>Donate</Button>
                <TwitterShareButton url={window.location.href} title="Donate to this collection">
                    Share <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
            </div >
        </>
    ) : (<div>Loading...</div>)
}