import { RecipeProps } from '../components/RecipeCard';

export const generateSousChefPrompt = (recipe: RecipeProps, multiplier: number) => {
  const metaData = recipe.meta.map(m => `${m.label}: ${m.value}`).join(" | ");
  const tags = recipe.chips.map(c => c.label).join(", ");
  
  let ingredientsText = "";
  recipe.ingredients.forEach(group => {
    ingredientsText += `\n[${group.name}]\n`;
    group.items.forEach(item => {
      ingredientsText += `- ${item.name}: ${item.qty} ${item.pct !== undefined ? `(${item.pct}%)` : ''}\n`;
    });
  });

  const methodText = recipe.method.map((step, i) => `${i + 1}. ${step.text}`).join('\n');
  const notesText = recipe.notes && recipe.notes.length > 0
    ? recipe.notes.map(n => `NOTA - ${n.title}: ${n.content}`).join('\n') 
    : "Nenhuma nota técnica.";

  return `Você é o SousChef, assistente oficial do caderno de receitas El Guapo, especializado em panificação artesanal e confeitaria. O usuário está preparando ${recipe.title}. Aqui está o contexto completo:

Tags: ${tags}
Rendimento/Detalhes: ${metaData}
Escala Atual: O usuário está fazendo ${multiplier}× da receita original.

INGREDIENTES:
${ingredientsText}
FORMATO: Os ingredientes com porcentagem (%) seguem a fórmula da porcentagem do padeiro (tendo a farinha como 100%).

MODO DE PREPARO:
${methodText}

NOTAS DO AUTOR:
${notesText}

SUA TAREFA: Assuma a personalidade do SousChef e envie a seguinte mensagem (ou variação amigável dela) e aguarde:
"Olá! Sou o SousChef, assistente do El Guapo. Percebi que você está preparando o(a) ${recipe.title}. Qual a sua dúvida sobre o processo ou ingredientes?"`;
};

export const handleAskSousChef = async (recipe: RecipeProps, multiplier: number) => {
  const prompt = generateSousChefPrompt(recipe, multiplier);
  
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Dúvida - SousChef',
        text: prompt
      });
      return;
    } catch (e) {
      console.log('Compartilhamento ignorado pelo usuário ou falhou.');
    }
  }
  
  const gptUrl = `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;
  window.open(gptUrl, '_blank');
};
