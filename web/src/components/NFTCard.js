import * as React from 'react';
import { useHistory } from 'react-router';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import useFinnie from '../hooks/useFinnie';

export default function NFTCard({ nft }) {
  const [wallet, connectWallet, submitRecipient, setRecipient, recipient] = useFinnie();
  let history = useHistory();

  function handleClick() {
    history.push("/nft/" + nft.id);
  }

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        height="240"
        image={"https://arweave.net/" + nft.id}
      />
      <CardContent style={{ cursor: 'pointer' }} onClick={handleClick}>
        <Typography gutterBottom variant="h4" component="div">
          {nft.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
           {nft.reward.toFixed(2)} KOII earned
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {nft.description}
        </Typography>
      </CardContent>
      <CardActions>
        <input type="text" placeholder="Recipient wallet address" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
        <Button size="small" onClick={submitRecipient}>Donate</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}