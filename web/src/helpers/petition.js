import apis from "../apis";

const signHelper = async (handlers, showAlert, listingID) => {
    if (handlers.wallet === "") {
        alert("You need to have finnie wallet to sign a petition!");
        return;
    }
    const payload = {
        function: "sign",
        signerId: handlers.wallet
    }
    console.log(payload);
    const response = await apis.petition.signThePetition(listingID, payload);
    console.log(response);
    showAlert();
}


const petition = {
    signHelper
}

export default petition;