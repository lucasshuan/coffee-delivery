type ProductTag =
  | "tradicional"
  | "gelado"
  | "com leite"
  | "especial"
  | "alcoólico";

export interface Product {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  price: number;
  tags: ProductTag[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    imgUrl: "https://i.imgur.com/6ajx97f.png",
    price: 9.9,
    tags: ["tradicional"],
  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    imgUrl: "https://i.imgur.com/1F3qfV8.png",
    price: 12.9,
    tags: ["tradicional"],
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    imgUrl: "https://i.imgur.com/G24ERgF.png",
    price: 14.9,
    tags: ["tradicional"],
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    imgUrl: "https://i.imgur.com/IX7qAhi.png",
    price: 10.9,
    tags: ["tradicional", "gelado"],
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    imgUrl: "https://i.imgur.com/yvuBrdj.png",
    price: 8.9,
    tags: ["tradicional", "com leite"],
  },
  {
    id: 6,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    imgUrl: "https://i.imgur.com/f2AQtDg.png",
    price: 19.9,
    tags: ["tradicional", "com leite"],
  },
  {
    id: 7,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    imgUrl: "https://i.imgur.com/VggfL6Q.png",
    price: 16.9,
    tags: ["tradicional", "com leite"],
  },
  {
    id: 8,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    imgUrl: "https://i.imgur.com/5WXUnwA.png",
    price: 15.9,
    tags: ["tradicional", "com leite"],
  },
  {
    id: 9,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    imgUrl: "https://i.imgur.com/tHCskSY.png",
    price: 21.9,
    tags: ["tradicional", "com leite"],
  },
  {
    id: 10,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    imgUrl: "https://i.imgur.com/KokdJyA.png",
    price: 11.9,
    tags: ["especial", "com leite"],
  },
  {
    id: 11,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    imgUrl: "https://i.imgur.com/ebRDGFk.png",
    price: 22.9,
    tags: ["especial", "alcoólico", "gelado"],
  },
  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    imgUrl: "https://i.imgur.com/8e260dh.png",
    price: 11.9,
    tags: ["especial"],
  },
  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    imgUrl: "https://i.imgur.com/GNZq208.png",
    price: 11.9,
    tags: ["especial"],
  },
  {
    id: 14,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    imgUrl: "https://i.imgur.com/6oVwDFM.png",
    price: 15.9,
    tags: ["especial", "alcoólico"],
  },
];
