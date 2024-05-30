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
export const mapToCMSProduct = ({ id, title, image, description, price, amount, category }: Product): ProductFromCMS => ({
  id: id,
  attributes: {
    Title: title,
    Image: image,
    Description: description,
    Price: price,
    Amount: amount,
    Category: category
  },
});

export const mapFromCMSProductToProduct = ({ id, attributes: { Title, Image, Description, Price, Amount, Category } }: ProductFromCMS): Product => ({
  title: Title,
  image: Image,
  description: Description,
  price: Price,
  amount: Amount,
  id: id,
  category: Category
});

export const mapFromCartProductToCMSProduct = ({ id, title, image, description, price, amount }: CartProduct): ProductFromCMS => ({
  id: id,
  attributes: {
    Title: title,
    Image: image,
    Description: description,
    Price: price,
    Amount: amount,
    Category: ''
  },
});