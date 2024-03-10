import { useLocation } from 'react-router-dom';
import Form from '../../components/Form/Form';
import { CartProductListType } from '../../types/types';
import { Container, ItensContainer, ListContainer, TotalContainer } from './styled';

export default function CheckOut(props: {
  setProductList: (state: CartProductListType[]) => void;
  setAddProduct: (state: CartProductListType[]) => void;
}) {
  const { setProductList, setAddProduct } = props;
  const location = useLocation();
  const { products } = location.state;

  const totalPrice = products.reduce(
    (prev: number, cur: CartProductListType) => prev + (cur.price * cur.quantity),
    0,
  );

  return (
    <Container>
      <ListContainer>
        {products.map(({ title, id, quantity, price }: CartProductListType) => (
          <ItensContainer key={ id }>
            <h3>{title}</h3>
            <p>{`Available: ${quantity}`}</p>
            <p>{`Price: ${quantity * price}`}</p>
          </ItensContainer>
        ))}
        <TotalContainer>{`Total: ${totalPrice.toFixed(2)}`}</TotalContainer>
      </ListContainer>
      <Form setAddProduct={ setAddProduct } setProductList={ setProductList } />
    </Container>
  );
}
