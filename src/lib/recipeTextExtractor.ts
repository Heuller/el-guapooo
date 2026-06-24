export const extractTextForRecipe = (recipe: any): string => {
  const parts = [recipe.title];
  recipe.chips?.forEach((c: any) => parts.push(c.label));
  recipe.meta?.forEach((m: any) => parts.push(`${m.label}: ${m.value}`));
  recipe.ingredients?.forEach((g: any) => {
    parts.push(g.name);
    g.items.forEach((item: any) => parts.push(item.name));
  });
  recipe.method?.forEach((m: any) => parts.push(m.text));
  recipe.notes?.forEach((n: any) => {
    parts.push(n.title);
    parts.push(n.content);
  });
  return parts.join(' ').toLowerCase();
};
