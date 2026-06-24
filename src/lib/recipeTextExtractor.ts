const nodeToString = (node: any): string => {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(nodeToString).join('');
  }
  if (node && typeof node === 'object' && 'props' in node && node.props.children) {
    return nodeToString(node.props.children);
  }
  return '';
};

export const extractTextForRecipe = (recipe: any): string => {
  const parts = [recipe.title];
  recipe.chips?.forEach((c: any) => parts.push(c.label));
  recipe.meta?.forEach((m: any) => parts.push(`${m.label}: ${m.value}`));
  recipe.ingredients?.forEach((g: any) => {
    parts.push(g.name);
    g.items.forEach((item: any) => parts.push(item.name));
  });
  recipe.method?.forEach((m: any) => parts.push(nodeToString(m.text)));
  recipe.notes?.forEach((n: any) => {
    parts.push(n.title);
    parts.push(nodeToString(n.content));
  });
  return parts.join(' ').toLowerCase();
};
