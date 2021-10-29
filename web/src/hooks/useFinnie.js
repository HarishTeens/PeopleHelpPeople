import { useState, useEffect } from 'react';
import Finnie from "@koii-network/kikusui"

export default function useFinnie() {
    const [wallet, setWallet] = useState("");

    const finnie = new Finnie();
    finnie.init();

    useEffect(() => {
        if (finnie.isConnected) {
            const address = finnie.userAddress;
            console.log(address);
        }
    }, [])


    const connectWallet = async () => {
        const isConnected = await finnie.connect();

        if (isConnected)
            setWallet(finnie.userAddress)
    }

    return [wallet, connectWallet]

}