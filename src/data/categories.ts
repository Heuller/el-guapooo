export const categories = [
  { id: "pizzas", num: "01", name: "Pizzas", sub: "massas · molhos · montagem", filter: (id: string) => id.startsWith('pizza') },
  { id: "focaccias", num: "02", name: "Focaccias", sub: "salgadas & doces", filter: (id: string) => id.startsWith('focaccia') },
  { id: "cucas", num: "03", name: "Cucas", sub: "massas & coberturas", filter: (id: string) => id.startsWith('cuca') },
  { id: "bolos", num: "04", name: "Bolos", sub: "massas & recheios", filter: (id: string) => id.startsWith('bolo') && !id.includes('panetone') && !id.includes('banana-bread') },
  { id: "quitanda", num: "05", name: "Quitanda", sub: "padaria brasileira artesanal", filter: (id: string) => id.startsWith('pao') },
  { id: "especiais", num: "06", name: "Especiais", sub: "receitas premium & sazonais", filter: (id: string) => id.includes('panetone') || id.includes('banana-bread') || id.includes('arroz-doce') },
];
