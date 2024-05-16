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

export const mapToCMSProduct = ({ id, title, image, description, price, amount }: Product): ProductFromCMS => ({
  attributes: {
    Id: id,
    Title: title,
    Image: image,
    Description: description,
    Price: price,
    Amount: amount
  },
});

export const mapFromCMSProductToProduct = ({ attributes: { Title, Image, Description, Price, Amount, Id } }: ProductFromCMS): Product => ({
  title: Title,
  image: Image,
  description: Description,
  price: Price,
  amount: Amount,
  id: Id
});

export const mapFromCartProductToCMSProduct = ({ id, title, image, description, price, amount }: CartProduct): ProductFromCMS => ({
  attributes: {
    Id: id,
    Title: title,
    Image: image,
    Description: description,
    Price: price,
    Amount: amount
  },
});