import { FaMinus, FaPlus } from "react-icons/fa6";
import { CartContext } from "../../../../contexts/CartContext";
import { toBRL } from "../../../../utils/currency";
import { useContext } from "react";
import {
  Container,
  ItemBottom,
  ItemInfo,
  ItemQuantity,
  ItemRemoveButton,
  ItemTop,
} from "./styles";
import { FaTrashAlt } from "react-icons/fa";

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
      <img src={product.imgUrl} width={64} alt={product.name} />
      <ItemInfo>
        <ItemTop>
          <div>{product.name}</div>
          <span>{toBRL(product.price * quantity)}</span>
        </ItemTop>
        <ItemBottom>
          <ItemQuantity>
            <button type="button" onClick={handleQuantitySubtract}>
              <FaMinus size={10} />
            </button>
            <span>{item.quantity}</span>
            <button type="button" onClick={handleQuantityAdd}>
              <FaPlus size={10} />
            </button>
          </ItemQuantity>
          <ItemRemoveButton type="button" onClick={handleRemove}>
            <FaTrashAlt size={10} /> <span>REMOVER</span>
          </ItemRemoveButton>
        </ItemBottom>
      </ItemInfo>
    </Container>
  );
}
