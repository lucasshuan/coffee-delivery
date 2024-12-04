import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { CartContext } from "../../../../contexts/CartContext";
import { toBRL } from "../../../../utils/currency";
import { useContext } from "react";
import {
  Container,
  ItemBottom,
  ItemQuantity,
  ItemRemoveButton,
  ItemTop,
} from "./styles";

interface SelectedItemProps {
  index: number;
}

export default function SelectedItem({ index }: SelectedItemProps) {
  const { items, removeFromCart, updateItemQuantity } = useContext(CartContext);
  const item = items[index];
  const product = item.product;
  const quantity = item.quantity;

  function handleQuantityAdd() {
    updateItemQuantity(index, quantity + 1);
  }

  function handleQuantitySubtract() {
    updateItemQuantity(index, quantity - 1);
  }

  function handleRemove() {
    removeFromCart(index);
  }

  return (
    <Container>
      <img src={product.imgUrl} alt={product.name} />
      <ItemTop>
        <div>{product.name}</div>
        <span>{toBRL(product.price * quantity)}</span>
      </ItemTop>
      <ItemBottom>
        <ItemQuantity>
          <button onClick={handleQuantitySubtract}>
            <FaMinus size={10} />
          </button>
          <span>{item.quantity}</span>
          <button onClick={handleQuantityAdd}>
            <FaPlus size={10} />
          </button>
        </ItemQuantity>
        <ItemRemoveButton onClick={handleRemove}>
          <FaTrash size={10} /> REMOVER
        </ItemRemoveButton>
      </ItemBottom>
    </Container>
  );
}
