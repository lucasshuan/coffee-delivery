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
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
  font-family: var(--title-font-family);
  font-size: 32px;
  color: var(--yellow-dark);
  font-weight: 700;
`;

export const Subtitle = styled.span`
  font-size: 20px;
`;

export const OrderInfo = styled.div`
  border: 1px solid linear-gradient(to right, var(--yellow), var(--purple));
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const OrderFragment = styled.div`
  gap: 0.75rem;

  div {
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
    font-size: 16px;
    color: var(--base-text);
  }
`;
