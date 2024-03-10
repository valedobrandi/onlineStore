import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;

  input {
    font-size: 2rem;
    border: none;
    border-radius: 1px;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.384);
    padding: 10px;
    width: 400px;
    margin-right: 1rem;
  }
  
  button {
    background-color: transparent;
    border: none;
    width: auto;
    font-size: 2rem;
    color: #31c28d;

    & :hover {
      color: #31c28dc1;
    }
  }

  select {
    margin-left: 4rem;
  }
  
`;

export const Container = styled.div`
  align-items: start;
  display: flex;
`;

export const Category = styled.ul`
  background-color: white;
  box-shadow: 3px 3px 6px 0 #0000000d;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-right: 80px;
  padding: 1rem;

  &:first-child {
    padding-top: 80px;
  }

    button {
    background-color: white;
    border: none;
    font-size: 1rem;
    padding: 0 2rem;
    text-align: left;
    width: 320px;
  }

  button:hover {
      border-left: 10px solid blue;
    }
`;

export const Title = styled.h1`
  font-weight: 800;
  line-height: 1.5rem;
  font-size: 1rem;
`;

export const Frete = styled.span`
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  width: 70%;
  height: 20px;

  span {
    background-color: blue;
    padding: 5px;
  }
`;

export const Price = styled.span`
  color: #444955;
  font-size: 2rem;
`;

export const SearchList = styled.div`
  margin: 0 auto;
`;

export const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: flex-start;

  img {
    height: 14rem;
  }

  :is(a) {
    color: black;
    margin-bottom: 5px;
    text-align: center;
    text-decoration: none;
 }

 li {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  background-color: white;
  height: 480px;
  padding: 1rem;
  width: 300px;

  :is(p) {
    margin-top: 0.5rem;
    
  }
 }
`;

export const SearchString = styled.p`
  color: #31c28d;
  width: 500px;
  font-size: 2rem;
  font-weight: 500;
  margin-top: 300px;
  text-align: center;
`;

export const CartButton = styled.button`
    background-color: #31c28d;
    border: none;
    box-shadow: 3px 3px 6px 0 #0000000d;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 2px;
    padding: 15px;
    width: 100%;
    text-align: center;

     &:hover {
    box-shadow: 0 0 2px 2px black;
  }
`;
