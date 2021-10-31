import apis from "../apis";

const donateHelper = async ( handlers, listingID, amount ) => {
    if (handlers.wallet === "") {
        alert("You need to have finnie wallet to sign a petition!");
        return;
    }
    const payload = {
        function: "donate",
        donorId: handlers.wallet,
        amount: amount
    }
    console.log(payload);
    const response = await apis.crowdsource.donateToken(listingID, payload);
    console.log(response);
}

const crowdsource = {
    donateHelper
}

export default crowdsource;