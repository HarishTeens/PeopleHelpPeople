import { useState, useEffect } from 'react';
import Finnie from "@koii-network/kikusui"

export default function useFinnie() {
    const [wallet, setWallet] = useState("");
    const [recipient, setRecipient] = useState("");

    const finnie = new Finnie();
    finnie.init();


    const connectWallet = async () => {
        const isConnected = await finnie.connect();
        console.log(finnie);
        if (isConnected)
            setWallet(finnie.userAddress)
    }

    const submitRecipient = async () => {
        console.log(recipient);
        const amount = 0.001;
        const txid = await finnie.sendTip(recipient, amount);
        alert("Tip sent! with id " + txid);
        setRecipient("D");
    }

    return [wallet, connectWallet, submitRecipient, setRecipient, recipient]

}