import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const Container = styled.div`
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
    padding: 0.5rem;
    border: none;
    outline: none;
    border-radius: 4px;
    background-color: var(--base-input);
  }

  ::placeholder {
    color: var(--base-label);
  }

  h2 {
    font-family: var(--title-font-family);
    font-size: 18px;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AddressSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
    align-items: center;
    justify-content: baseline;

    h3 {
      margin: 0;
      font-family: var(--text-font-family);
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

export const DistrictInput = styled.input`
  width: 100%;
`;

export const NumberPart = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;

  :nth-child(1) {
    width: 200px;
  }

  :nth-last-child() {
    position: relative;
    width: 100%;

    span: {
      position: absolute;
      height: 100%;
      right: 0;
      font-size: 12px;
      font-style: italic;
      color: var(--base-label);
    }
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

  input:nth-last-child() {
    width: 60px;
  }
`;

export const PaymentMethodSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PaymentMethodGroup = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const PaymentMethodButton = styled(RadioGroup.Item)`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: var(--purple) span {
    color: var(--base-text);
    font-size: 16px;
  }
`;

export const CompletionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CompletionInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: var(--base-card);
  border-radius: 6px 36px 6px 36px;
  padding: 1rem;
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
    color: var(--base-text);
    font-size: 14px;
  }

  div:nth-last-child() {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const ItemSelection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled.button`
  border-radius: 6px;
  padding: 0.5rem;
  width: 100%;
  font-size: 16px;
  background-color: var(--yellow);
  color: var(--white);
`;
