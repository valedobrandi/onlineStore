import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
margin-bottom: 3rem;
gap: 6rem;
`;

export const Product = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background-color: white;
width: 400px;
height: 400px;
margin: 2rem;
padding: 1rem;
box-shadow: 3px 3px 6px 0 #0000000d;

  img {
    width: 250px;
  }

  p {
    text-align: center;
    font-weight: 800;
    line-height: 1.5rem;
    font-size: 1rem;
  }
`;

export const ProductDetailList = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: white;
padding: 2rem;
line-height: 2rem;
width: 400px;
height: auto;
margin: 2rem;
padding: 1rem;
box-shadow: 3px 3px 6px 0 #0000000d;


li {
  list-style: none;
  line-height: 3rem;
  font-weight: 500;
}
`;

export const AddCart = styled.button`
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
    box-shadow: 3px 3px 6px 0 #0000000d;

     &:hover {
    box-shadow: 0 0 2px 2px black;
  }
`;

export const Price = styled.span`
  color: #444955;
  font-size: 2rem;
  box-shadow: 3px 3px 6px 0 #0000000d;
`;
