import { CartProduct } from './models/cartProduct';
import { Product } from './models/product';
import { ProductFromCMS } from './models/productFromCMS';

export const mapToCartProduct = (product: Product, quantity: number, user: string, totalPrice: number): CartProduct => ({
  ...product,
  quantity,
  user,
  totalPrice,
  itemPrice: product.price
});

export const mapToCMSProduct = ({ title, image, description, price, amount }: Product): ProductFromCMS => ({
  attributes: {
    Title: title,
    Image: image,
    Description: description,
    Price: price,
    Amount: amount
  },
});

export const mapFromCMSProductToProduct = ({ attributes: { Title, Image, Description, Price, Amount } }: ProductFromCMS): Product => ({
  title: Title,
  image: Image,
  description: Description,
  price: Price,
  amount: Amount
});

export const mapFromCartProductToCMSProduct = ({ title, image, description, price, amount }: CartProduct): ProductFromCMS => ({
  attributes: {
    Title: title,
    Image: image,
    Description: description,
    Price: price,
    Amount: amount
  },
});