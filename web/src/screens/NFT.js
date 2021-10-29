import { useParams } from "react-router";

export default function NFT() {

    const { id } = useParams();
    return (
        <div>
            <h1>NFT: {id}</h1>
        </div>
    );

}