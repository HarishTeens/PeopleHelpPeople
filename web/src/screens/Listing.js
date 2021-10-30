import { useEffect, useState } from "react";
import { useParams } from "react-router";
import apis from "../apis";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Listing({ handlers }) {
    const { id } = useParams();
    const [nft, setNft] = useState(null);
    const [realtimeAttention, setRealtimeAttention] = useState(0);
    const [show,setShow] = useState(false);

    useEffect(() => {
        setTimeout(async () => {
            await apis.nft.getRealtimeAttention(id).then(setRealtimeAttention);
        }, 5000);
    }, []);

    useEffect(() => {
        apis.nft.get(id).then(setNft);
        const signPort = async () => {
            console.log(handlers.finnie.windowFinnie.signPort);
            const { data } = await handlers.finnie.windowFinnie.signPort(id);
            const response = await apis.nft.submitPort(data);
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 5000);
        }
        signPort();
    }, [])

    return nft ? (<div>
        <Stack >
            {show && <Alert severity="success">Port Recieved</Alert>}
        </Stack>
        <h1> {nft?.title}</h1>
        <h2>{nft?.reward.toFixed(3)} KOII earned  |  {nft?.attention + realtimeAttention} views</h2>
        <img src={"https://arweave.net/" + nft?.id} style={{ height: "300px" }} alt={nft?.title} />
        <p>{nft?.description}</p>        
    </div >) : (<div>Loading...</div>)

}