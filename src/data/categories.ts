export const categories = [
  { id: "pizzas", num: "01", name: "Pizzas", sub: "massas · molhos · montagem", filter: (id: string) => id.startsWith('pizza') },
  { id: "paes", num: "02", name: "Pães Rústicos", sub: "fermentação natural · sourdough", filter: (id: string) => id.startsWith('pao') && !id.includes('queijo') },
  { id: "doces", num: "03", name: "Doces & Viennoiserie", sub: "folhados · brioches · cookies", filter: (id: string) => ['cookie', 'babka', 'croissant'].some(prefix => id.startsWith(prefix)) },
  { id: "bolos", num: "04", name: "Bolos & Entremets", sub: "massas · recheios · coberturas", filter: (id: string) => id.startsWith('bolo') },
  { id: "quitanda", num: "05", name: "Quitanda", sub: "pães de queijo · broas · salgados", filter: (id: string) => id.includes('queijo') || id.includes('broa') },
  { id: "especiais", num: "06", name: "Especiais", sub: "receitas premium & sazonais", filter: (id: string) => id.includes('panetone') || id.includes('banana-bread') },
];
