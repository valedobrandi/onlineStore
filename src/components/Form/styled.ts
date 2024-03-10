import styled from 'styled-components';

export const CheckForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-left: 2rem;
  width: 850px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 3px 3px 6px 0 #0000000d;

  button {
    background-color: #31c28d;
    border: none;
    box-shadow: 3px 3px 6px 0 #0000000d;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 2px;
    padding: 15px;
    width: 400px;
    text-align: center;
    margin-left: 2rem;
    margin-bottom: 1rem;

    &:hover {
      box-shadow: 0 0 2px 2px black;
    }
  }
`;

export const Input = styled.input`
width: 600px;
  font-size: 13px;
  border-radius: 4px;
  line-height: 1.5;
  padding: 5px 10px;
  transition: box-shadow 100ms ease-in, border 100ms ease-in,
  background-color 100ms ease-in;
  border: 2px solid #dee1e2;
  color: rgb(14, 14, 16);
  background: #dee1e2;
  display: block;
  height: 30px;
  &:hover {
    border-color: #ccc;
  }
  &:focus {
    border-color: #4766ff;
    background: #fff;
  }
`;

export const PersonalInfo = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  border: none;
  padding: 2rem;
`;

export const BuyInfo = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: none;
`;

export const PayIcon = styled.label`
font-size: 4rem;
list-style: none;


&:hover {
    color: #4766ff;
}
`;

export const Radio = styled.input`
display: none;
`;
