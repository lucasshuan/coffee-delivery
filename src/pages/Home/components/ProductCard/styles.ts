import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--base-card);
  border-radius: 6px 36px 6px 36px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 238px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2.5rem;
  gap: 1rem;

  img {
    position: relative;
    top: -2.5rem;
    margin-bottom: -2.5rem;
  }
`;

export const ProductInfo = styled.div`
  h2 {
    margin: 0;
    font-family: var(--title-font-family);
    font-size: 20px;
    color: var(--base-subtitle);
  }

  span {
    color: var(--base-label);
    font-size: 14px;
  }
`;

export const ProductTagList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const ProductTag = styled.div`
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--yellow-light);
  color: var(--yellow-dark);
  font-weight: 700;
  font-size: 10px;
  padding: 4px 6px;
  border: none;
  border-radius: 100px;
`;

export const BuyActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 38px;
`;

export const BuyPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: baseline;
  gap: 4px;
  font-size: 14px;
  min-width: 86px;

  span {
    font-size: 24px;
    font-family: var(--title-font-family);
    font-weight: 700;
  }
`;

export const BuyQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--base-button);
  border-radius: 6px;
  height: 38px;

  span {
    width: 1.2rem;
  }

  button {
    background-color: var(--base-button);
    color: var(--purple);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 0.5rem;
  }
`;

export const BuyButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--purple);
  border-radius: 6px;
  border: none;
  color: var(--white);
  padding: 0.75rem;
  height: 38px;
`;
