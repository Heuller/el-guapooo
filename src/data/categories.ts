export const categories = [
  { id: "pizzas", num: "01", name: "Pizzas", sub: "massas · molhos · montagem", filter: (id: string) => id.startsWith('pizza') },
  { id: "paes", num: "02", name: "Pães Rústicos", sub: "fermentação natural · sourdough", filter: (id: string) => id.startsWith('pao') },
  { id: "doces", num: "03", name: "Doces & Viennoiserie", sub: "folhados · brioches · cookies", filter: (id: string) => ['cookie', 'babka', 'croissant'].some(prefix => id.startsWith(prefix)) }
];
