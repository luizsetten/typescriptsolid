import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Product } from './classes/product';
import { Persistency } from './services/persistency';
import { NoDiscount } from './classes/interfaces/discount';
import { IndividualCustomer } from './classes/customer';

const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualcustomer = new IndividualCustomer(
  'Luiz',
  'Setten',
  '123.456.789-50',
);
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  individualcustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lapis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
