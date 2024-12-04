import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { Center, Container, OrderFragment, OrderInfo, Title } from "./styles";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaDollarSign, FaStopwatch } from "react-icons/fa6";

export function Success() {
  const navigate = useNavigate();
  const { order } = useContext(CartContext);

  if (!order) return navigate("/");

  return (
    <Container>
      <Center>
        <div>
          <Title>
            <h2>Uhu! Pedido confirmado</h2>
            <span>Agora é só aguardar que logo o café chegará até você</span>
          </Title>
          <OrderInfo>
            <OrderFragment color="var(--purple)">
              <div>
                <FaMapMarkerAlt size={16} />
              </div>
              <span>
                Entrega em <strong>{order.address}</strong>.
                <br />
                {order.district} - {order.city}, {order.state}
              </span>
            </OrderFragment>
            <OrderFragment color="var(--yellow)">
              <div>
                <FaStopwatch size={16} />
              </div>
              <span>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </span>
            </OrderFragment>
            <OrderFragment color="var(--yellow-dark)">
              <div>
                <FaDollarSign size={16} />
              </div>
              <span>
                Pagamento na entrega
                <br />
                <strong>{order.paymentMethod}</strong>
              </span>
            </OrderFragment>
          </OrderInfo>
        </div>
        <img src="success.png" alt="Ilustração de entrega" />
      </Center>
    </Container>
  );
}
