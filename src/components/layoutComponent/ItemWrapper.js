import styled from 'styled-components';

export const ItemWrapper = styled.div`
  padding: 15px;
  border: 1px solid #d0021b;
  border-radius: 10px;
  margin: 15px;
  color: #e2777a;
  font-size: 3vw;

  & span:nth-child(odd) {
    color: #f8c555;
    font-size: 0.7em;
  }

  & span:nth-child(2) {
    cursor: pointer;
  }

  @media(max-width: 1400px) {
    font-size: 5vw;
  }
`;