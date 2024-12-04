import { FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import { Container, Header, Navbar, NavSection } from "./styles";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function Layout() {
  const navigate = useNavigate();
  const { items } = useContext(CartContext);

  return (
    <Container>
      <Header>
        <Navbar>
          <img src="logo.svg" alt="logo" onClick={() => navigate("/")} />
          <NavSection>
            <span>
              <FaMapMarkerAlt width={22} /> Porto Alegre, RS
            </span>
            <button onClick={() => navigate("/checkout")}>
              {items.length > 0 && <div>{items.length}</div>}
              <FaShoppingCart width={22} />
            </button>
          </NavSection>
        </Navbar>
      </Header>
      <Outlet />
    </Container>
  );
}
