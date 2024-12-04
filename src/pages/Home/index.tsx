import {
  FaBoxOpen,
  FaCartShopping,
  FaMugHot,
  FaStopwatch,
} from "react-icons/fa6";
import { products } from "../../data/products";
import ProductCard from "./components/ProductCard";
import {
  Container,
  Section,
  SectionLeft,
  SectionTitle,
  SectionSubtitle,
  SectionGrid,
  SectionGridElement,
  ProductList,
  SectionInside,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <Section>
        <SectionInside>
          <SectionLeft>
            <SectionTitle>
              Encontre o café perfeito para qualquer hora do dia
            </SectionTitle>
            <SectionSubtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </SectionSubtitle>
            <SectionGrid>
              <SectionGridElement color="var(--yellow-dark)">
                <div>
                  <FaCartShopping size={16} />
                </div>
                Compra simples e segura
              </SectionGridElement>
              <SectionGridElement color="var(--base-text)">
                <div>
                  <FaBoxOpen size={16} />
                </div>
                Embalagem mantém o café intacto
              </SectionGridElement>
              <SectionGridElement color="var(--yellow)">
                <div>
                  <FaStopwatch size={16} />
                </div>
                Entrega rápida e rastreada
              </SectionGridElement>
              <SectionGridElement color="var(--purple)">
                <div>
                  <FaMugHot size={16} />
                </div>
                O café chega fresquinho até você
              </SectionGridElement>
            </SectionGrid>
          </SectionLeft>
          <img src="banner.png" alt="Banner de Café" />
        </SectionInside>
      </Section>
      <div>
        <h2>Nossos cafés</h2>
        <ProductList>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductList>
      </div>
    </Container>
  );
}
