import styled from 'styled-components';
import { GiShoppingBag } from 'react-icons/gi';

export const Conteiner = styled.div`
  align-items: center;
  background-color: #003be5;
  display: flex;
  gap: 15rem;
  height: 150px;
  justify-content: space-around;
`;

export const Home = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  width: 100px;

  a {
    color: #31c28d;
    font-size: 4rem;
  }

  a:hover {
    color: #1a9769;
    transition: 500ms;
  }
`;

export const Cart = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: 500;
  width: 100px;

  p {
    background-color: #31c28d;
    border-radius: 50%;
    color: white;
    height: 35px;
    line-height: 40px;
    text-align: center;
    width: 35px;
  }

  a {
    color: white;
    font-size: 3.5rem;
  }

  a:hover {
    color: #1a9769;
    transition: 500ms;
  }
`;

export const Title = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  letter-spacing: 2px;
  text-transform: uppercase;

  h2 {
    color: #31c28d;
    font-weight: 400;
    text-transform: none;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #31c28d;
  font-size: 6rem;
`;
