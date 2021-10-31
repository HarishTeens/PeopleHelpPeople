// {type === "COLLECTION" && (<><input type="text" placeholder="Recipient wallet address" value={handlers.recipient} onChange={(e) => handlers.setRecipient(e.target.value)} />
//           <Button size="small" onClick={handlers.submitRecipient}>Donate</Button></>)}        


import * as React from 'react';
import { useHistory } from 'react-router';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import helpers from '../helpers';

export default function PetitionCard({ listing, handlers, type = "PETITION", showAlert }) {
  let history = useHistory();

  function handleClick() {
    history.push("/crowdsource/" + listing.id);
  }

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardContent style={{ cursor: 'pointer' }} onClick={handleClick}>
        <Typography gutterBottom variant="h4" component="div">
          {listing.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {listing.funds.raised.toFixed(2)} so far of {listing.funds.goal.toFixed(2)} goal
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {listing.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>helpers.petition.signHelper(handlers, showAlert, listing.id)}>Sign</Button>        
      </CardActions>
    </Card>
  );
}