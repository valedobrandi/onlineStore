import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProductListType } from '../../types/types';
import { BuyContainer, Clean, DetailTag,
  Details, List, Product, QuantityButton, Title } from './styles';

export default function CarrinhoDeCompras(props: {
  addProduct: CartProductListType[],
  setAddProduct: (state: CartProductListType[]) => void,
  addQuantity: (item: CartProductListType) => void }) {
  const { addProduct, setAddProduct, addQuantity } = props;

  useEffect(() => {
    const storedCart = localStorage.getItem('CartList');
    const checkList = addProduct.length === 0;
    if (checkList && storedCart) setAddProduct(JSON.parse(storedCart));
  }, []);

  const removeProductCarrinho = (id: string) => {
    const storedCartList = addProduct.filter((product) => product.id !== id);
    localStorage.setItem('CartList', JSON.stringify(storedCartList));
    setAddProduct(storedCartList);
  };

  function removeQuantity(item: CartProductListType) {
    const updatedCart = addProduct.map((product) => (
      item.id === product.id
        ? { ...product, quantity: product.quantity - 1 }
        : product
    ));
    setAddProduct(updatedCart);
    localStorage.setItem('CartList', JSON.stringify(updatedCart));
  }

  const renderList = addProduct.length === 0;

  function isAvailable(item: string) {
    const searchProduct = addProduct.find(({ id }) => id === item);
    return searchProduct ? searchProduct.quantity : 0;
  }

  const totalPrice = addProduct
    .reduce((prev, cur) => prev + (cur.price * cur.quantity), 0);

  const buttonCheck = addProduct.length === 0;

  return (
    <>

      <List>
        {!renderList
          ? addProduct.map((detail: CartProductListType) => (
            <Product data-testid="shopping-cart-product-name" key={ detail.id }>
              <Title>{detail.title}</Title>
              <Details>
                <QuantityButton
                  data-testid="product-increase-quantity"
                  onClick={ () => addQuantity(detail) }
                  disabled={ detail.quantity >= detail.available_quantity }
                >
                  +
                </QuantityButton>
                <DetailTag>{detail.quantity}</DetailTag>
                <QuantityButton
                  data-testid="product-decrease-quantity"
                  onClick={ () => removeQuantity(detail) }
                  disabled={ detail.quantity === 1 }
                >
                  -
                </QuantityButton>
                <DetailTag>
                  {`US$: ${(detail.price * detail.quantity).toFixed(2)}`}
                </DetailTag>
                <DetailTag>
                  {`Available: ${detail.available_quantity - isAvailable(detail.id)}`}
                </DetailTag>
                <Clean
                  data-testid="remove-product"
                  onClick={ () => removeProductCarrinho(detail.id) }
                >
                  x
                </Clean>
              </Details>
            </Product>
          ))
          : <p data-testid="shopping-cart-empty-message">Empty Cart</p>}
      </List>
      <BuyContainer>
        {!buttonCheck && (
          <NavLink
            data-testid="checkout-products"
            to="/checkout"
            state={ { products: addProduct } }
          >
            Buy Cart
          </NavLink>)}
        <h3>{`Total: ${totalPrice.toFixed(2)}`}</h3>
      </BuyContainer>
    </>
  );
}
