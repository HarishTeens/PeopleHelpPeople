import * as React from 'react';
import { useHistory } from 'react-router';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import apis from '../apis';
import useFinnie from '../hooks/useFinnie';

export default function ListingCard({ listing, handlers, type = "PETITION", showAlert }) {
  let history = useHistory();

  function handleClick() {
    history.push("/listing/" + listing.id);
  }

  const signHelper = async () => {
    if (handlers.wallet === "") {
      alert("You need to have finnie wallet to sign a petition!");
      return;
    }
    const payload = {
      function: "sign",
      signerId: handlers.wallet
    }
    console.log(payload);
    const response = await apis.petition.signThePetition(listing.id, payload);
    console.log(response);
    showAlert();
  }

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardContent style={{ cursor: 'pointer' }} onClick={handleClick}>
        <Typography gutterBottom variant="h4" component="div">
          {listing.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {Object.keys(listing.signs).length} signed
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {listing.description}
        </Typography>
      </CardContent>
      <CardActions>
        {type === "PETITION" && <Button size="small" onClick={signHelper}>Sign</Button>}
        {type === "COLLECTION" && (<><input type="text" placeholder="Recipient wallet address" value={handlers.recipient} onChange={(e) => handlers.setRecipient(e.target.value)} />
          <Button size="small" onClick={handlers.submitRecipient}>Donate</Button></>)}
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}