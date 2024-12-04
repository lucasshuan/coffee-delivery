import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const OrderForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 1120px;
  gap: 2rem;

  input {
    color: var(--base-text);
    padding: 0 1.25rem;
    border: none;
    outline: none;
    border-radius: 4px;
    background-color: var(--base-input);
    height: 42px;
    font-size: 14px;
    transition: all 0.2s ease-in-out;
  }

  input:focus {
    background-color: var(--base-button);
  }

  ::placeholder {
    color: var(--base-label);
  }

  h2 {
    margin: 0;
    font-family: var(--title-font-family);
    font-size: 18px;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const AddressSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--base-card);
  padding: 2.5rem;
  border-radius: 6px;
`;

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: baseline;
  color: ${(props) => props.color};

  div {
    color: var(--base-subtitle);
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: baseline;
    margin-bottom: 1rem;

    h3 {
      margin: 0;
      font-family: var(--text-font-family);
      font-weight: 400;
      font-size: 16px;
    }

    span {
      font-size: 14px;
    }
  }
`;

export const CEPInput = styled.input`
  width: 200px;
`;

export const NumberPart = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;

  input:nth-child(1) {
    width: 200px;
  }

  input:nth-child(2) {
    width: 100%;
  }
`;

export const CityPart = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;

  input:nth-child(1) {
    width: 200px;
  }

  input:nth-child(2) {
    width: 100%;
  }

  input:nth-child(3) {
    width: 60px;
  }
`;

export const PaymentMethodSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--base-card);
  padding: 2.5rem;
  border-radius: 6px;
`;

export const PaymentMethodGroup = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const PaymentMethodButton = styled(RadioGroup.Item)`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: baseline;
  border-radius: 6px;
  background-color: var(--base-button);
  color: var(--purple);
  height: 51px;

  border: 1px solid
    ${(props) => (props.checked ? "var(--purple)" : "transparent")};
  transition: all 0.2s ease-in-out;

  span {
    color: var(--base-text);
    font-weight: 400;
    font-size: 12px;
  }
`;

export const CompletionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 448px;
`;

export const CompletionInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: var(--base-card);
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;
`;

export const ItemSelection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  div:nth-child(1) {
    padding-top: 0;
  }
`;

export const TotalValues = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: var(--base-text);
    font-size: 14px;
  }

  div:nth-child(3) {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const SubmitButton = styled.button`
  border-radius: 6px;
  padding: 0.5rem;
  width: 100%;
  font-size: 14px;
  background-color: var(--yellow);
  color: var(--white);
  height: 46px;
  margin-top: 0.5rem;
`;
