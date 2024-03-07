import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';

const cardWrapper = {
  display: 'flex',
  gap: '20px',
  paddingTop: '30px',
};

const card = {
  minWidth: '300px',
};

const ActionCards = () => {
  return (
    <Box sx={cardWrapper}>
      <Card sx={card}>
        <CardActionArea>
          <CardMedia component='img' height='100' image='' alt='abc' />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              ABC
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={card}>
        <CardActionArea>
          <CardMedia component='img' height='100' image='' alt='abc' />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              ABC
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={card}>
        <CardActionArea>
          <CardMedia component='img' height='100' image='' alt='abc' />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              ABC
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default ActionCards;
