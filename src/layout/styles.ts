import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  main {
    margin-top: 104px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 104px;
  position: fixed;
  z-index: 1;
  background-color: var(--background);
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1120px;

  img {
    cursor: pointer;
  }
`;

export const NavSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  span {
    max-height: 38px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;
    font-weight: 500;
    border: none;
    border-radius: 6px;
    background-color: var(--purple-light);
    color: var(--purple-dark);
  }

  button {
    position: relative;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    background-color: var(--yellow-light);
    color: var(--yellow-dark);

    div {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: -8px;
      right: -8px;
      border-radius: 100%;
      color: var(--white);
      font-size: 12px;
      font-weight: 400;
      background-color: var(--yellow-dark);
      height: 18px;
      width: 18px;
    }
  }
`;
