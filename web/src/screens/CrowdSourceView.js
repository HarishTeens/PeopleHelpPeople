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
            handlers.setRecipient(data.owner);
            setCrowdsource({ ...data, id: id });
        }
        fetchData();

    }, [])

    const donateHandler = async () => {
        // sends tip from finnie wallet

        await handlers.submitRecipient();
        await helpers.crowdsource.donateHelper(handlers, showAlert, crowdsource.id, 0.001);
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 5000);
    }

    return crowdsource ? (
        <>
            <Stack >
                {show && <Alert severity="success">Donated 0.001 default KOII tokens. Fund transfer Successfull</Alert>}
            </Stack>
            <div >
                <h1> {crowdsource?.name}</h1>
                <h2>{crowdsource?.funds.raised.toFixed(2)} so far of {crowdsource?.funds.goal.toFixed(2)} goal </h2>
                <p>{crowdsource?.description}</p>


                <Button size="small" onClick={donateHandler}>Donate</Button>
                <TwitterShareButton url={window.location.href} title="Donate to this collection">
                    Share <TwitterIcon size={32} round={true} />
                </TwitterShareButton>


            </div >
            <h3>Transaction Records</h3>
            <ol>
                {
                    Object.keys(crowdsource.funds.records).map(key => {
                        return (
                            <div>
                                <li>{key} donated <b>{crowdsource.funds.records[key].toFixed(2)}</b> KOII</li>
                            </div>
                        )
                    })
                }
            </ol>
        </>
    ) : (<div>Loading...</div>)
}