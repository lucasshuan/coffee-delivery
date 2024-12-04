import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--base-button);
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ItemTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemBottom = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const ItemQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--base-button);
  border-radius: 6px;
  height: 38px;

  span {
    text-align: center;
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

export const ItemRemoveButton = styled.button`
  background-color: var(--base-button);
  color: var(--purple);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  height: 38px;
  gap: 0.25rem;
  font-size: 14px;
`;
