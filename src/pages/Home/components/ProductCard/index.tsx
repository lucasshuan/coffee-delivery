import { useContext, useState } from "react";
import { Product } from "../../../../data/products";
import {
  BuyActions,
  BuyButton,
  BuyPrice,
  BuyQuantity,
  ProductTag,
  ProductInfo,
  ProductTagList,
  Container,
} from "./styles";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../../../../contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleSubmit = () => {
    addToCart(product, quantity);
  };

  const handleQuantityAdd = () => {
    setQuantity((state) => state + 1);
  };

  const handleQuantitySubtract = () => {
    setQuantity((state) => (state > 1 ? state - 1 : state));
  };

  return (
    <Container>
      <img src={product.imgUrl} alt={product.name} />
      <ProductTagList>
        {product.tags.map((tag, index) => (
          <ProductTag key={index}>{tag.toUpperCase()}</ProductTag>
        ))}
      </ProductTagList>
      <ProductInfo>
        <h2>{product.name}</h2>
        <span>{product.description}</span>
      </ProductInfo>
      <BuyActions>
        <BuyPrice>
          R$ <span>{product.price.toFixed(2).replace(".", ",")}</span>
        </BuyPrice>
        <BuyQuantity>
          <button onClick={handleQuantitySubtract}>
            <FaMinus size={10} />
          </button>
          <span>{quantity}</span>
          <button onClick={handleQuantityAdd}>
            <FaPlus size={10} />
          </button>
        </BuyQuantity>
        <BuyButton onClick={handleSubmit}>
          <FaCartShopping />
        </BuyButton>
      </BuyActions>
    </Container>
  );
}
