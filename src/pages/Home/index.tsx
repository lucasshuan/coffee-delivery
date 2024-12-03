import { products } from "../../data/products";
import ProductCard from "./components/ProductCard";
import { Container, ProductList } from "./styles";

export default function Home() {
  return (
    <Container>
      <h2>Nossos cafés</h2>
      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </Container>
  );
}
