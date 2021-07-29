import { v4 as uuidv4 } from 'uuid';
import GigImg from '../images/GigImg.png';
import PizzaImg from '../images/PizzaImg.png';
import ProjectImg from '../images/projectImg.png';
import BasketForShoppingImg from '../images/BasketForShoppingImg.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Gig',
    desc: 'An application (in production) will help you to find a side job for few hours not far from your location and earn fast money here and now.',
    img: GigImg,
  },
  {
    id: uuidv4(),
    name: 'Pizza shop',
    desc: 'A future application/site for buying your favourite pizza.',
    img: PizzaImg,
  },
  {
    id: uuidv4(),
    name: 'Basket for shopping',
    desc: 'An application (in production) for online shopping.',
    img: BasketForShoppingImg,
  },
];

export default projects;
