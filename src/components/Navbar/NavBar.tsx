import { NavLink, Outlet } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { TiArrowBack } from 'react-icons/ti';
import { GiShoppingBag } from 'react-icons/gi';
import { CartProductListType } from '../../types/types';
import { Cart, Conteiner, Home, Title, TitleContainer } from './styles';

export default function NavBar(props: { addProduct: CartProductListType[] }) {
  const { addProduct } = props;

  const cartLength = addProduct
    .reduce((prev: number, cur: { quantity: number }) => prev + cur.quantity, 0);

  return (
    <>
      <Conteiner>
        <Home>
          <NavLink to="/"><TiArrowBack /></NavLink>
        </Home>
        <TitleContainer>
          <GiShoppingBag />
          <Title>
            <h1>Front-End</h1>
            <h2>online store</h2>
          </Title>
        </TitleContainer>
        <Cart data-testid="shopping-cart-size">
          <NavLink
            data-testid="shopping-cart-button"
            to="/carrinho"
          >
            <BsCart3 />
          </NavLink>
          <p>{ cartLength }</p>
        </Cart>
      </Conteiner>
      <Outlet />
    </>
  );
}
