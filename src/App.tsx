import { CartProvider } from "./contexts/CartContext";
import { RouteProvider } from "./routes";

function App() {
  return (
    <CartProvider>
      <RouteProvider />
    </CartProvider>
  );
}

export default App;
