export function toCurrency(value: number) {
  return value.toFixed(2).replace(".", ",");
}

export function toBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
