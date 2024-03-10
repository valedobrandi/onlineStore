import styled from 'styled-components';

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 500px;
  gap: 1rem;

  button {
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
  }
`;

export const StarsContainter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CommentsList = styled.section`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
margin-top: 4rem;
font-size: 1rem;
padding: 2rem;

  p {
    font-size: 1.5rem;
  }
`;

export const Title = styled.div`
display: flex;
gap: 1rem;
border-bottom: 1px solid black;
margin: 2rem;
  p {
    font-size: 1.5rem;
  }
`;
