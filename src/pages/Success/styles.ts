import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Center = styled.div`
  margin-top: 5rem;
  display: flex;
  width: 1120px;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
    font-family: var(--title-font-family);
    font-size: 32px;
    color: var(--yellow-dark);
    font-weight: 700;
  }

  span {
    font-size: 20px;
  }
`;

export const OrderInfo = styled.div`
  margin-top: 2.5rem;
  border: 1px solid var(--purple);
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  text-align: center;
  gap: 1.75rem;
`;

export const OrderFragment = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  div {
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.color};
    width: 32px;
    height: 32px;
    border-radius: 100%;
  }

  span {
    line-height: 1.3;
    font-size: 16px;
    color: var(--base-text);
    text-align: left;
  }
`;
