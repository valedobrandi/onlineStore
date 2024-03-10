import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 2rem;
background-color: white;
width: 1000px;
padding: 2rem;
margin: 2rem;
`;

export const Product = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 1px solid grey;;
  padding: 0.5rem;
`;

export const Clean = styled.button`
border: none;
color: red;
background-color: transparent;
font-size: 1.5rem;
font-weight: 500;
`;

export const Details = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
gap: 2rem;
padding: 0.5rem;
`;

export const QuantityButton = styled.button`
border: none;
border-radius: 50%;
background-color: transparent;
font-size: 3rem;
width: 50px;

 &:hover {
  background-color: #0000000d;
}
`;

export const Title = styled.h3`
margin-right: 1rem;
`;

export const DetailTag = styled.p`
font-size: 1.5rem;
`;

export const BuyContainer = styled.div`
display: flex;
align-items: center;
gap: 2rem;
background-color: white;
padding: 2rem;
margin: 2rem;
width: 500px;

a {
  background-color: #31c28d;
    border: none;
    box-shadow: 3px 3px 6px 0 #0000000d;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 2px;
    padding: 15px;
    width: 50%;
    text-align: center;
    

     &:hover {
    box-shadow: 0 0 2px 2px black;
  }
}

`;
