import { useEffect, useState } from "react";
import { useParams } from "react-router";


export default function NFT() {
    const { id } = useParams();
    const [nft, setNft] = useState(null);

    useEffect(() => {
        fetch("https://mainnet.koii.live/attention/nft?id=" + id)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setNft(data);
            })
    })

    return (
        <div>
            <h1> {nft?.title}</h1>
            <p>{nft?.description}</p>
            <a href={`https://koii.rocks/content-detail/${id}`} target="_blank">Visit Koii.rocks to send attention rewards</a>
        </div>
    );

}