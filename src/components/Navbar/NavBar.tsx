import { NavLink, Outlet } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { TiArrowBack } from 'react-icons/ti';
import { GiShoppingBag } from 'react-icons/gi';
import { CartProductListType } from '../../types/types';
import styles from './NavBar.module.css';

export default function NavBar(props: { addProduct: CartProductListType[] }) {
  const { addProduct } = props;

  const cartLength = addProduct
    .reduce((prev: number, cur: { quantity: number }) => prev + cur.quantity, 0);

  return (
    <>
      <div className={ styles.div }>
        <div className={ styles.container }>
          <NavLink to="/"><TiArrowBack /></NavLink>
        </div>
        <div className={ styles.titleContainer }>
          <GiShoppingBag className={ styles.titleIcon } />
          <div className={ styles.title }>
            <h1>Front-End</h1>
            <h2>online store</h2>
          </div>
        </div>
        <div className={ styles.cart } data-testid="shopping-cart-size">
          <NavLink
            data-testid="shopping-cart-button"
            to="/carrinho"
          >
            <BsCart3 className={ styles.icon } id="hover" />
          </NavLink>
          <p>{ cartLength }</p>
        </div>
      </div>
      <Outlet />
    </>
  );
}
