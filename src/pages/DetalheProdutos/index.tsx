import { useParams } from 'react-router-dom';

import { CartProductListType } from '../../types/types';
import FormValidation from '../../components/FormValidation/FormValidation';
import { AddCart, Container, Price, Product, ProductDetailList } from './styles';

export default function DetalheProdutos(props: {
  addProductCarrinho: (state: CartProductListType) => void;
  productList: CartProductListType[] | undefined;
}) {
  const { addProductCarrinho, productList } = props;

  const params = useParams();

  const currentProduct = productList
    ? productList.find(({ id }: { id: string }) => id === params.id)
    : null;

  return (
    <>
      {currentProduct ? (
        <Container>
          <Product>
            <p data-testid="product-detail-name">{currentProduct.title}</p>
            <img
              data-testid="product-detail-image"
              src={ currentProduct.thumbnail }
              alt=""
            />
          </Product>
          <ProductDetailList>
            <ul>
              {currentProduct.specification.map(({ name, value_name }) => (
                <li key={ name }>{`${name}: ${value_name}`}</li>))}
            </ul>
            {currentProduct.shipping && <span>free shipping</span> }
            <p>
              R$
              <Price data-testid="product-detail-price">
                {currentProduct.price}
              </Price>
            </p>
            <AddCart
              data-testid="product-detail-add-to-cart"
              onClick={ () => addProductCarrinho(currentProduct) }
            >
              Add Cart
            </AddCart>
          </ProductDetailList>
        </Container>)
        : <p>Search a product</p> }
      <FormValidation paramId={ params.id } currentProduct={ currentProduct } />
    </>
  );
}
