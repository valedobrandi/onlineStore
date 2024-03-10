import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem;
`;

export const ListContainer = styled.div`
    padding: 2rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    :is(p) {
        font-size: 1.2rem;
        font-weight: 500;
        margin: 1rem;
    }
`;

export const ItensContainer = styled.div`
    background-color: white;
    width: 700px;
    padding: 1rem;
    box-shadow: 3px 3px 6px 0 #0000000d;
`;

export const TotalContainer = styled.p`
    background-color: white;
    width: 700px;
    padding: 1rem;
    box-shadow: 3px 3px 6px 0 #0000000d;
`;
