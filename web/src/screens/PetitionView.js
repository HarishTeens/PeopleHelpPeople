import { Button } from "@mui/material"
import helpers from "../helpers"

import { TwitterIcon, TwitterShareButton } from "react-share"
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import apis from "../apis";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export default function PetitionView({ handlers,  showAlert }) {
    const { id } = useParams();
    const [petition, setPetition] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await apis.petition.get(id);
            setPetition({ ...data, id: id });
        }
        fetchData();
    }, [])

    return petition ? (
        <>
            <Stack >
                {show && <Alert severity="success">Port Recieved</Alert>}
            </Stack>
            <div >
                <h1> {petition?.name}</h1>
                <h2>{Object.keys(petition.signs).length} signed  </h2>
                <p>{petition?.description}</p>
                <Button size="small" onClick={() => helpers.petition.signHelper(handlers, showAlert, petition.id)}>Sign</Button>
                <TwitterShareButton url={window.location.href} title="Sign this petition">
                    Share <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
            </div >
        </>
    ) : (<div>Loading...</div>)

}