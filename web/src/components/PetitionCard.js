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
    history.push("/listing/" + listing.id);
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
        <Button size="small" onClick={()=>helpers.petition.signHelper(handlers, showAlert, listing.id)}>Sign</Button>        
      </CardActions>
    </Card>
  );
}