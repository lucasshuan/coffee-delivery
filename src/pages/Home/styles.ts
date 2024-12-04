import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  h2 {
    font-family: var(--title-font-family);
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("background.png");
  background-position: 100% auto;
  height: 544px;
  width: 100%;
`;

export const SectionInside = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1120px;
  gap: 5rem;
`;

export const SectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-family: var(--title-font-family);
  font-size: 48px;
  color: var(--base-title);
  margin: 0;
`;

export const SectionSubtitle = styled.span`
  font-family: var(--text-font-family);
  font-size: 20px;
  color: var(--base-subtitle);
  margin: 0;
`;

export const SectionGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

export const SectionGridElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: baseline;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.color};
    padding: 1px 0.5rem;
    height: 1.75rem;
    border-radius: 100%;
    color: var(--white);
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 1120px;
  justify-content: space-between;
  margin-bottom: 5rem;
`;
