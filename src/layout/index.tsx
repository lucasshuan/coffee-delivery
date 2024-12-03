import { FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import { Container, Header, Navbar, NavSection } from "./styles";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <Container>
      <Header>
        <Navbar>
          <img src="logo.svg" />
          <NavSection>
            <span>
              <FaMapMarkerAlt width={22} /> Porto Alegre, RS
            </span>
            <button>
              <FaShoppingCart width={22} />
            </button>
          </NavSection>
        </Navbar>
      </Header>
      <Outlet />
    </Container>
  );
}
