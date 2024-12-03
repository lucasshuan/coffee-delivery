import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  h2 {
    font-family: var(--title-font-family);
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 5rem;
`;
