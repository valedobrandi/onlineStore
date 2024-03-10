import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';
import { CartProductListType,
  ProductListType, ProductcategoryType } from '../../types/types';
import { CartButton, Category, Container, ContainerList, Frete,
  InputContainer, Price, SearchList, SearchString, Title } from './styles';

export default function Home(props: {
  productList: CartProductListType[],
  setProductList: (state: CartProductListType[]) => void,
  addProductCarrinho: (state: CartProductListType) => void,
  addProduct: CartProductListType[],
}) {
  const { productList, setProductList, addProductCarrinho, addProduct } = props;

  const [productcategory, setProductcategory] = useState<ProductcategoryType[]>();
  const [productSearch, setProductSearch] = useState<string>('');
  const [search, setSearch] = useState(
    'Search product or choose a category.',
  );

  useEffect(() => {
    async function fetchCategory() {
      const response = await getCategories();
      setProductcategory(response);
    }
    fetchCategory();
  }, []);

  async function handleClick(categoryId = '', query = '') {
    setProductSearch('');
    const response = await getProductsFromCategoryAndQuery(categoryId, query);
    const listCheck = productList.length === 0;
    if (listCheck) setSearch('Product not found');
    const productDetailsList = response.results.map(
      ({ title,
        id,
        price,
        available_quantity,
        shipping,
        thumbnail,
        attributes }: ProductListType) => {
        const details = attributes.map(({ name, value_name }:
        { name: string; value_name: string }) => ({ name, value_name }));
        return {
          title,
          id,
          price,
          thumbnail,
          available_quantity,
          shipping: shipping.free_shipping,
          specification: details,
          quantity: 0,
        };
      },
    );

    setProductList(productDetailsList);
  }

  const listCheck = productList.length > 0;

  function isDisabled(item: string) {
    const searchProduct = addProduct.find(({ id }) => id === item);
    return searchProduct ? searchProduct.quantity : 0;
  }

  function isAvailable(item: string) {
    const searchProduct = addProduct.find(({ id }) => id === item);
    return searchProduct ? searchProduct.quantity : 0;
  }

  function onSortList(event: React.ChangeEvent<HTMLSelectElement>) {
    if (event.target.value === 'Lower') {
      return setProductList(productList.slice().sort((a, b) => a.price - b.price));
    }

    if (event.target.value === 'Higher') {
      return setProductList(productList.slice().sort((a, b) => b.price - a.price));
    }
  }

  return (

    <Container>
      <Category>
        {productcategory
          ? productcategory.map(({ name, id }) => (
            <button
              data-testid="category"
              key={ id }
              onClick={ () => handleClick(id) }
            >
              {name}
            </button>))
          : 'Categories'}
      </Category>
      <SearchList>
        <InputContainer>
          <input
            data-testid="query-input"
            type="text"
            value={ productSearch }
            onChange={ (e) => setProductSearch(e.target.value) }
          />
          <button
            data-testid="query-button"
            onClick={ () => handleClick('', productSearch) }
          >
            <FaSearch />
          </button>
          <select name="" id="" onChange={ onSortList }>
            <option value="Higher">higher price</option>
            <option value="Lower">lower price</option>
          </select>
        </InputContainer>
        {listCheck ? (
          <ContainerList>
            {productList.map((detail: CartProductListType) => (
              <li data-testid="product" key={ detail.id }>
                <Link
                  data-testid="product-detail-link"
                  to={ `/detalhes/${detail.id}` }
                >
                  <Frete data-testid="free-shipping">
                    {detail.shipping && (
                      <span>free shipping</span>
                    ) }
                  </Frete>
                  <img src={ detail.thumbnail } alt="" />
                  <Title>{`${detail.title.slice(0, 30)}...`}</Title>
                  <p>
                    US$
                    <Price>{detail.price}</Price>
                  </p>
                  <p>
                    {`Available: 
                    ${detail.available_quantity - isAvailable(detail.id)}`}
                  </p>
                </Link>
                <CartButton
                  disabled={ detail.available_quantity === isDisabled(detail.id) }
                  data-testid="product-add-to-cart"
                  onClick={ () => addProductCarrinho(detail) }
                >
                  Adicionar ao carrinho
                </CartButton>
              </li>))}
          </ContainerList>)
          : (
            <SearchString
              data-testid="home-initial-message"
            >
              {!listCheck && search}
            </SearchString>)}
      </SearchList>
    </Container>

  );
}
