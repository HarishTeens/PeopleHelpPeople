import { useEffect, useState } from "react";
import { useParams } from "react-router";
import apis from "../apis";


export default function NFT() {
    const { id } = useParams();
    const [nft, setNft] = useState(null);

    useEffect(() => {
        apis.nft.get(id).then(setNft);
    }, [])

    return (
        <div>
            <h1> {nft?.title}</h1>
            <h2>{nft?.reward.toFixed(3)} KOII earned</h2>
            <img src={"https://arweave.net/" + nft.id}alt={nft?.title} />
            <p>{nft?.description}</p>
            <a href={`https://koii.rocks/content-detail/${id}`} target="_blank">Visit Koii.rocks to send attention rewards</a>
        </div>
    );

}