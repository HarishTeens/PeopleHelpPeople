import { useEffect, useState } from "react";
import { useParams } from "react-router";
import apis from "../apis";


export default function NFT({ handlers }) {
    const { id } = useParams();
    const [nft, setNft] = useState(null);
    const [realtimeAttention, setRealtimeAttention] = useState(0);

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
            console.log(response);
        }
        signPort();
    }, [])

    return nft ? (<div>
        <h1> {nft?.title}</h1>
        <h2>{nft?.reward.toFixed(3)} KOII earned  |  {nft?.attention + realtimeAttention} views</h2>
        <img src={"https://arweave.net/" + nft?.id} style={{ height: "300px" }} alt={nft?.title} />
        <p>{nft?.description}</p>
        <a href={`https://koii.rocks/content-detail/${id}`} target="_blank">Visit Koii.rocks to send attention rewards</a>
    </div >) : (<div>Loading...</div>)

}