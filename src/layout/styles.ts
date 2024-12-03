import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1120px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 104px;
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
    border: none;
    border-radius: 6px;
    background-color: var(--purple-light);
    color: var(--purple-dark);
  }

  button {
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    background-color: var(--yellow-light);
    color: var(--yellow-dark);
  }
`;
