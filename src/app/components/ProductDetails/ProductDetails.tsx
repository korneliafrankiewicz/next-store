import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from '@mui/material';
import Spinner from '../Spinner/Spinner';
import { useProductById } from '@/services/productService';
import { Star } from '@mui/icons-material';

interface ProductDetailsProps {
  id: number;
  recommendations: any[]; // Add type
}

const ProductDetails = ({ id, recommendations }: ProductDetailsProps) => {
  const { data: productDetails, isLoading, isError } = useProductById(id);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError || !productDetails) {
    return <Typography variant='h3'>Product not found</Typography>;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <img
          src='/placeholder.svg'
          alt='Product Image'
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant='h4'>{productDetails.title}</Typography>
        <Typography variant='body1'>
          Comfortable and stylish sofa with a unique prism-inspired design.
        </Typography>
        <Box display='flex' alignItems='center'>
          <Star />
          <Star />
          <Star />
          <Star color='disabled' />
          <Star color='disabled' />
        </Box>
        <Typography variant='h5'>{productDetails.price} zł</Typography>
        <form>
          <Typography variant='h6'>Color</Typography>
          <RadioGroup defaultValue='black'>
            <FormControlLabel value='black' control={<Radio />} label='Black' />
            <FormControlLabel value='white' control={<Radio />} label='White' />
            <FormControlLabel value='blue' control={<Radio />} label='Blue' />
          </RadioGroup>
          <Typography variant='h6'>Quantity</Typography>
          <Select defaultValue='1'>
            <MenuItem value='1'>1</MenuItem>
            <MenuItem value='2'>2</MenuItem>
            <MenuItem value='3'>3</MenuItem>
            <MenuItem value='4'>4</MenuItem>
            <MenuItem value='5'>5</MenuItem>
          </Select>
          <Button variant='contained'>Add to cart</Button>
        </form>
        <Typography variant='h5'>Product Details</Typography>
        <Typography variant='body1'>{productDetails.description}</Typography>
        <Typography variant='h4'>Recommended Products</Typography>
        {recommendations.map((recommendation) => (
          <div key={recommendation.id}>
            <Typography variant='h5'>{recommendation.title}</Typography>
            <Typography variant='body1'>
              {recommendation.description}
            </Typography>
            <Typography variant='h6'>{recommendation.price} zł</Typography>
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
