import { RecipeProps } from "../types/recipe";

export const recipes: RecipeProps[] = [
  {
    id: "pizza-massa-base",
    title: "Massa de Pizza El Guapo",
    chips: [
      { label: "Método Indireto · Poolish" },
      { label: "65% hidratação", accent: true },
      { label: "Borda Pãozinho" },
      { label: "Fermentação Lática" },
    ],
    meta: [
      { label: "Rendimento", value: "2 pizzas ~435g" },
      { label: "Hidratação", value: "65%" },
    ],
    nutritionConfig: { portionSize: 80, portionLabel: "fatia (80g)" },
    image: "images/el-guapo-img-01.webp",
    ingredients: [
      {
        name: "Base (100% = 500g farinha)",
        items: [
          { 
            name: "Farinha W300+ ou Tipo 1 Forte", qty: "500g", pct: 100
          , nutrition: { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1, saturatedFats: 0.2, fibers: 2.7, sodium: 2 } },
          { 
            name: "Água", qty: "325g", pct: 65
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          { 
            name: "Fermento biológico fresco", qty: "5g", pct: 1
          , nutrition: { calories: 105, carbs: 18.1, proteins: 8.4, totalFats: 1.9, saturatedFats: 0.3, fibers: 2.7, sodium: 51 } },
          { 
            name: "Mel ou açúcar", qty: "10g", pct: 2
          , nutrition: { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 } },
          { 
            name: "Sal refinado", qty: "12g", pct: 2.4
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 38758 } },
          { 
            name: "Azeite de oliva", qty: "20g", pct: 4
          , nutrition: { calories: 884, carbs: 0, proteins: 0, totalFats: 100, saturatedFats: 14, fibers: 0, sodium: 2 } },
        ],
      },
    ],
    method: [
      { text: <><strong className="text-ink">Poolish — 18 a 24h antes.</strong> Em uma tigela, combine 200g de farinha, 200g de água em temperatura ambiente e 2g de fermento fresco. Cubra e deixe fermentar em temperatura ambiente por 18 a 24h.</> },
      { text: <><strong className="text-ink">Refresco — Mistura inicial.</strong> Na batedeira com gancho, combine os 300g de farinha restante com o mel. Adicione o poolish maturado e 125g de água gelada. Misture em velocidade baixa por 2 a 3 minutos.</> },
      { text: <><strong className="text-ink">Sal e fermento de reforço.</strong> Adicione o sal e os 3g de fermento fresco restantes. Sove em velocidade média por 8 a 10 minutos, até a massa estar elástica.</> },
      { text: <><strong className="text-ink">Incorporação do azeite.</strong> Adicione o azeite em fio fino. Bata por mais 2 a 3 minutos.</> },
      { text: <><strong className="text-ink">Descanso e boleamento.</strong> Cubra a massa e deixe descansar por 20 a 30 minutos. Divida em 2 porções de ~435g e boleie com tensão superficial.</> },
      { text: <><strong className="text-ink">Maturação longa.</strong> Leve à geladeira por 24 a 48h.</> },
      { text: <><strong className="text-ink">Temperamento e Abertura.</strong> Retire as bolas da geladeira com 2 a 3h de antecedência. Abra com as mãos.</> },
      { text: <><strong className="text-ink">Assamento.</strong> Asse em forno a 250–300°C sobre pedra refratária por 6 a 12 minutos.</> },
    ],
    notes: [
      {
        title: "Poolish: fermentação lática",
        content: "A fermentação prolongada produz ácido lático responsável pelo aroma suave e levemente adocicado, e gera extensibilidade superior na massa."
      },
      {
        title: "A hidratação define a pizza",
        content: "62–65% é o equilíbrio ideal. Cria uma borda macia tipo 'pãozinho' e funciona bem a 250°C."
      }
    ]
  },
  {
    id: "focaccia-massa-base",
    title: "Massa Base de Focaccia",
    chips: [
      { label: "Tangzhong" },
      { label: "80% hidratação", accent: true },
      { label: "Fermentação Longa" },
      { label: "Miolo Macio" },
    ],
    meta: [
      { label: "Rendimento", value: "6–7 un." },
      { label: "Preparo", value: "4–6 h" },
    ],
    nutritionConfig: { portionSize: 80, portionLabel: "fatia (80g)" },
    image: "images/el-guapo-img-02.webp",
    ingredients: [
      {
        name: "Tangzhong",
        items: [
          { 
            name: "Farinha de trigo", qty: "50g"
          , nutrition: { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1, saturatedFats: 0.2, fibers: 2.7, sodium: 2 } },
          { 
            name: "Leite integral", qty: "250g"
          , nutrition: { calories: 60, carbs: 4.7, proteins: 3.2, totalFats: 3.3, saturatedFats: 2.1, fibers: 0, sodium: 44 } },
        ],
      },
      {
        name: "Massa Final (100% = 600g farinha)",
        items: [
          { 
            name: "Farinha de trigo média/forte", qty: "550g", pct: 100
          , nutrition: { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1, saturatedFats: 0.2, fibers: 2.7, sodium: 2 } },
          { 
            name: "Leite integral gelado", qty: "260g", pct: 85
          , nutrition: { calories: 60, carbs: 4.7, proteins: 3.2, totalFats: 3.3, saturatedFats: 2.1, fibers: 0, sodium: 44 } },
          { name: "Tangzhong preparado", qty: "todo", pct: undefined  }, // sem nutrição = 0g
          { 
            name: "Gemas", qty: "3 un.", pct: 9
          , weightInGrams: 54, nutrition: { calories: 322, carbs: 3.6, proteins: 15.9, totalFats: 26.5, saturatedFats: 9.5, fibers: 0, sodium: 48 } },
          { 
            name: "Açúcar refinado", qty: "42g", pct: 7
          , nutrition: { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 } },
          { 
            name: "Manteiga sem sal", qty: "70g", pct: 11.6
          , nutrition: { calories: 717, carbs: 0.1, proteins: 0.8, totalFats: 81.1, saturatedFats: 51.4, fibers: 0, sodium: 11 } },
          { 
            name: "Azeite de oliva", qty: "40g", pct: 6.6
          , nutrition: { calories: 884, carbs: 0, proteins: 0, totalFats: 100, saturatedFats: 14, fibers: 0, sodium: 2 } },
          { 
            name: "Sal refinado", qty: "12g", pct: 2
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 38758 } },
          { 
            name: "Fermento biológico seco", qty: "2g", pct: 0.3
          , nutrition: { calories: 315, carbs: 54.3, proteins: 25.2, totalFats: 5.7, saturatedFats: 0.9, fibers: 8.1, sodium: 153 } },
        ],
      },
    ],
    method: [
      { text: <><strong className="text-ink">Tangzhong.</strong> Dissolva 50g de farinha em 250g de leite frio. Leve ao fogo médio até atingir 65°C e engrossar. Resfrie.</> },
      { text: <><strong className="text-ink">Autólise.</strong> Misture a farinha, o leite gelado, as gemas e o tangzhong frio. Deixe descansar por 30 minutos.</> },
      { text: <><strong className="text-ink">Sovar e adicionar gorduras.</strong> Adicione o açúcar, sal e fermento. Sove até o ponto de véu. Incorpore a manteiga e o azeite aos poucos.</> },
      { text: <><strong className="text-ink">Dobras e Fermentação.</strong> Faça dobras a cada 30 minutos (3 vezes) e deixe dobrar de volume (cerca de 2h).</> },
      { text: <><strong className="text-ink">Porcionamento e Assamento.</strong> Divida a massa, deixe fermentar nas formas, adicione as coberturas e asse a 200°C por 20 a 25 minutos.</> },
    ]
  },
  {
    id: "cuca-massa-base",
    title: "Massa Base de Cuca",
    chips: [{"label":"Tangzhong","accent":false},{"label":"75% hidratação","accent":true},{"label":"Massa Enriquecida","accent":false},{"label":"Baunilha · Raspas Cítricas","accent":false}],
    meta: [{"label":"Rendimento","value":"1 forma 30×40cm ou 2 de 20×30cm"},{"label":"Preparo total","value":"4–6h (ou 18h c/ fermentação a frio)"}],
    nutritionConfig: { portionSize: 80, portionLabel: "fatia (80g)" },
    image: "images/el-guapo-img-03.webp",
    ingredients: [
      {
        name: "A. Tangzhong (retirado da fórmula principal)",
        items: [
          {
            name: "Farinha de trigo",
            qty: "40g",
            pct: 600
          , nutrition: { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1, saturatedFats: 0.2, fibers: 2.7, sodium: 2 } },
          {
            name: "Leite integral",
            qty: "200g",
            pct: 480
          , nutrition: { calories: 60, carbs: 4.7, proteins: 3.2, totalFats: 3.3, saturatedFats: 2.1, fibers: 0, sodium: 44 } }
        ]
      },
      {
        name: "B. Massa Principal (100% = 600g farinha)",
        items: [
          {
            name: "Farinha de trigo média/forte",
            qty: "600g",
            pct: 100
          , nutrition: { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1, saturatedFats: 0.2, fibers: 2.7, sodium: 2 } },
          {
            name: "Leite integral",
            qty: "480g",
            pct: 80
          , nutrition: { calories: 60, carbs: 4.7, proteins: 3.2, totalFats: 3.3, saturatedFats: 2.1, fibers: 0, sodium: 44 } },
          {
            name: "Ovos inteiros",
            qty: "100g",
            pct: 16.7
          , nutrition: { calories: 143, carbs: 1.6, proteins: 13, totalFats: 8.9, saturatedFats: 2.7, fibers: 0, sodium: 168 } },
          {
            name: "Gemas",
            qty: "36g",
            pct: 6
          , nutrition: { calories: 322, carbs: 3.6, proteins: 15.9, totalFats: 26.5, saturatedFats: 9.5, fibers: 0, sodium: 48 } },
          {
            name: "Açúcar refinado",
            qty: "120g",
            pct: 20
          , nutrition: { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 } },
          {
            name: "Manteiga sem sal, ponto pomada",
            qty: "120g",
            pct: 20
          , nutrition: { calories: 717, carbs: 0.1, proteins: 0.8, totalFats: 81.1, saturatedFats: 51.4, fibers: 0, sodium: 11 } },
          {
            name: "Fermento biológico seco",
            qty: "7g",
            pct: 1.17
          , nutrition: { calories: 315, carbs: 54.3, proteins: 25.2, totalFats: 5.7, saturatedFats: 0.9, fibers: 8.1, sodium: 153 } },
          {
            name: "Sal",
            qty: "8g",
            pct: 1.33
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 38758 } },
          {
            name: "Baunilha",
            qty: "8–10g",
            pct: 1.3
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          {
            name: "Raspas de limão ou laranja",
            qty: "q.b."
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } }
        ]
      }
    ],
    method: [
      { text: <><strong>Tangzhong.</strong> Em uma panela pequena, dissolva
                    os 40g de farinha nos 200g de leite integral frio, mexendo
                    com fouet até não restar grumos. Leve ao fogo médio sem
                    parar de mexer até a mistura atingir 65°C e transformar-se:
                    de líquida e opaca a uma pasta cremosa e levemente
                    translúcida — ponto de pudim leve. Retire imediatamente do
                    fogo, cubra com filme plástico em contato direto com a
                    superfície e deixe esfriar completamente antes de usar.
                    Adicionado quente, compromete a atividade do fermento.</> },
      { text: <><strong>Preparação dos secos.</strong> Na tigela da
                    batedeira com gancho, combine os 560g de farinha restante, o
                    açúcar e o fermento biológico seco. Misture brevemente com
                    fouet para distribuir o fermento de forma uniforme. Reserve
                    o sal separado — adicionado depois, evita o contato direto
                    com o fermento e a inibição prematura da fermentação.</> },
      { text: <><strong>Blend dos líquidos.</strong> Em tigela à parte,
                    misture os 280g de leite morno (32–38°C), os ovos inteiros
                    levemente batidos, as gemas, a baunilha, as raspas cítricas
                    e o tangzhong já completamente frio. Homogeneize bem. A
                    temperatura controlada dos líquidos garante que o fermento
                    ative de forma progressiva, criando fermentação consistente
                    sem picos bruscos de atividade.</> },
      { text: <><strong>Desenvolvimento do glúten.</strong> Adicione o blend
                    de líquidos aos secos na batedeira. Misture em velocidade
                    baixa por 2 a 3 minutos até a farinha hidratar
                    completamente. Adicione o sal e aumente para velocidade
                    média. Sove por 8 a 10 minutos, até a massa estar lisa,
                    elástica e se descolando das paredes da tigela. Por ser
                    altamente enriquecida, o glúten demora mais — respeite o
                    tempo e faça o teste do véu ao final.</> },
      { text: <><strong>Incorporação da manteiga.</strong> Reduza para
                    velocidade baixa e adicione a manteiga em ponto pomada em 3
                    ou 4 porções, aguardando absorção completa de cada adição
                    antes da próxima. A massa pode parecer que se desintegra nos
                    primeiros momentos — é esperado. Após toda a manteiga
                    absorvida, bata até a massa estar completamente lisa, sedosa
                    e com leve brilho característico das massas de alto
                    enriquecimento.</> },
      { text: <><strong>Primeira fermentação.</strong> Forme uma bola,
                    transfira para tigela levemente untada com manteiga e cubra
                    com filme plástico. Fermente em temperatura ambiente por
                    1h30 a 2h, até dobrar de volume. Para sabor mais profundo e
                    miolo de textura superior: após 20 minutos em temperatura
                    ambiente, leve à geladeira por
                    <strong>12 a 18h</strong> (fermentação a frio) — o frio retarda o
                    fermento e ativa as enzimas que desenvolvem complexidade
                    aromática.</> },
      { text: <><strong>Modelagem na forma.</strong> Unte e enfarinhe a
                    forma com esmero. Desgaseifique suavemente a massa na
                    bancada e transfira para a forma. Com os dedos levemente
                    untados, pressione do centro em direção às bordas até cobrir
                    toda a superfície de forma uniforme. Se a massa retrair
                    persistentemente, cubra e aguarde 10 a 15 minutos para o
                    glúten relaxar; retome sem forçar.</> },
      { text: <><strong>Segunda fermentação.</strong> Cubra com pano úmido
                    ou filme levemente untado. Deixe fermentar em temperatura
                    ambiente por <strong>45 a 60 minutos</strong>, até a massa
                    estar visivelmente abaulada, macia ao toque e ultrapassando
                    levemente a borda da forma. O sinal de ponto ideal: ao
                    pressionar com o dedo, a marca retorna devagar — a estrutura
                    está firme o suficiente para suportar a farofa sem colapsar.</> },
      { text: <><strong>Farofa e assamento.</strong> Distribua a farofa
                    generosamente sobre a massa fermentada, pressionando
                    levíssimamente para aderir sem compactar a estrutura. Asse
                    em forno preaquecido a <strong>180°C</strong> por 25 a 35
                    minutos, até a farofa estar uniformemente dourada. O
                    termômetro deve marcar <strong>88–92°C</strong> no centro da
                    massa. Deixe repousar 15 minutos antes de desenformar — o
                    miolo precisa de tempo para firmar.</> },
    ],
    notes: []
  },
  {
    id: "cuca-massa-chocolate",
    title: "Massa de Cuca de Chocolate",
    chips: [{"label":"Tangzhong","accent":false},{"label":"75% hidratação · Cacau + Café","accent":true},{"label":"Massa Enriquecida","accent":false},{"label":"Perfil Intenso & Úmido","accent":false}],
    meta: [{"label":"Rendimento","value":"1 forma 30×40cm ou 2 de 20×30cm"},{"label":"Preparo total","value":"4–6h (ou 18h c/ fermentação a frio)"}],
    nutritionConfig: { portionSize: 80, portionLabel: "fatia (80g)" },
    image: "images/el-guapo-img-04.webp",
    ingredients: [
      {
        name: "A. Tangzhong (retirado da fórmula)",
        items: [
          {
            name: "Farinha de trigo",
            qty: "40g",
            pct: 560
          , nutrition: { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1, saturatedFats: 0.2, fibers: 2.7, sodium: 2 } },
          {
            name: "Leite integral",
            qty: "200g",
            pct: 420
          , nutrition: { calories: 60, carbs: 4.7, proteins: 3.2, totalFats: 3.3, saturatedFats: 2.1, fibers: 0, sodium: 44 } }
        ]
      },
      {
        name: "B. Massa Principal (100% = 560g farinha)",
        items: [
          {
            name: "Farinha de trigo média/forte",
            qty: "560g",
            pct: 100
          , nutrition: { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1, saturatedFats: 0.2, fibers: 2.7, sodium: 2 } },
          {
            name: "Leite integral",
            qty: "420g",
            pct: 75
          , nutrition: { calories: 60, carbs: 4.7, proteins: 3.2, totalFats: 3.3, saturatedFats: 2.1, fibers: 0, sodium: 44 } },
          {
            name: "Ovos inteiros",
            qty: "100g",
            pct: 17.9
          , nutrition: { calories: 143, carbs: 1.6, proteins: 13, totalFats: 8.9, saturatedFats: 2.7, fibers: 0, sodium: 168 } },
          {
            name: "Gemas",
            qty: "36g",
            pct: 6.4
          , nutrition: { calories: 322, carbs: 3.6, proteins: 15.9, totalFats: 26.5, saturatedFats: 9.5, fibers: 0, sodium: 48 } },
          {
            name: "Açúcar refinado",
            qty: "120g",
            pct: 21.4
          , nutrition: { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 } },
          {
            name: "Cacau em pó 100%",
            qty: "35–45g",
            pct: 6.3
          , nutrition: { calories: 228, carbs: 58, proteins: 20, totalFats: 14, saturatedFats: 8, fibers: 33, sodium: 21 } },
          {
            name: "Manteiga sem sal, ponto pomada",
            qty: "90g",
            pct: 16.1
          , nutrition: { calories: 717, carbs: 0.1, proteins: 0.8, totalFats: 81.1, saturatedFats: 51.4, fibers: 0, sodium: 11 } },
          {
            name: "Fermento biológico seco",
            qty: "7g",
            pct: 1.25
          , nutrition: { calories: 315, carbs: 54.3, proteins: 25.2, totalFats: 5.7, saturatedFats: 0.9, fibers: 8.1, sodium: 153 } },
          {
            name: "Sal",
            qty: "8g",
            pct: 1.43
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 38758 } },
          {
            name: "Café solúvel",
            qty: "4–6g",
            pct: 0.7
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          {
            name: "Baunilha",
            qty: "8–10g",
            pct: 1.4
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          {
            name: "Raspas de cítrico",
            qty: "q.b. ou opcional"
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } }
        ]
      }
    ],
    method: [
      { text: <><strong>Tangzhong.</strong> Em uma panela pequena, dissolva
                    os 40g de farinha nos 200g de leite integral frio com fouet
                    até sumir os grumos. Leve ao fogo médio, mexendo sem parar,
                    até atingir 65°C — de opaca e líquida a uma pasta cremosa
                    levemente translúcida, ponto de pudim leve. Retire do fogo,
                    cubra com filme plástico em contato com a superfície e deixe
                    esfriar completamente antes de usar.</> },
      { text: <><strong>Secos com cacau e café.</strong> Na tigela da
                    batedeira com gancho, peneire o cacau em pó e o café solúvel
                    juntos diretamente sobre os 520g de farinha restante.
                    Adicione o açúcar e o fermento biológico seco. Misture bem
                    com fouet até o cacau estar homogeneamente incorporado —
                    manchas de cacau não distribuídas resultam em cor e sabor
                    irregulares. Reserve o sal separado para adicionar depois.</> },
      { text: <><strong>Blend dos líquidos.</strong> Em tigela à parte,
                    misture os 220g de leite morno (32–38°C), os ovos inteiros
                    levemente batidos, as gemas, a baunilha, as raspas cítricas
                    se usar, e o tangzhong completamente frio. Homogeneize bem.
                    O leite morno — não quente — garante ativação progressiva do
                    fermento sem comprometer a rede de glúten ainda em formação.</> },
      { text: <><strong>Desenvolvimento do glúten.</strong> Adicione o blend
                    de líquidos aos secos e misture em velocidade baixa por 2 a
                    3 minutos até a farinha hidratar. Adicione o sal e aumente
                    para velocidade média. Sove por 8 a 10 minutos. A presença
                    do cacau — com sua gordura natural (manteiga de cacau) e
                    fibras — reduz levemente a extensibilidade do glúten; por
                    isso a base é 560g de farinha e não 600g. Faça o teste do
                    véu ao final — a membrana pode ter coloração escura, o que é
                    normal.</> },
      { text: <><strong>Incorporação da manteiga.</strong> Reduza para
                    velocidade baixa e adicione a manteiga em ponto pomada em 3
                    ou 4 porções, esperando absorção completa de cada adição.
                    Após toda a manteiga incorporada, bata até a massa estar
                    completamente lisa, sedosa e com brilho escuro
                    característico. A manteiga distribui a gordura do cacau de
                    forma homogênea, suavizando o perfil de sabor e
                    intensificando o brilho do miolo após assado.</> },
      { text: <><strong>Primeira fermentação.</strong> Forme uma bola,
                    transfira para tigela levemente untada e cubra com filme
                    plástico. Para a cuca de chocolate, o
                    <strong>fermentação a frio de 12 a 18h</strong> é especialmente
                    recomendado: o repouso prolongado no frio permite que os
                    compostos aromáticos do cacau — fenólicos e ésteres — se
                    integrem profundamente à massa, resultando em sabor mais
                    complexo e menos "amargo de pó".</> },
      { text: <><strong>Modelagem na forma.</strong> Unte e enfarinhe a
                    forma — ou use cacau em pó no lugar da farinha para não
                    clarear as bordas. Desgaseifique suavemente e transfira a
                    massa. Com os dedos levemente untados, pressione do centro
                    em direção às bordas até cobrir toda a superfície de forma
                    uniforme. Se retrair, cubra e aguarde 10 a 15 minutos para o
                    glúten relaxar.</> },
      { text: <><strong>Segunda fermentação.</strong> Cubra e deixe
                    fermentar em temperatura ambiente por
                    <strong>45 a 60 minutos</strong>, até a massa estar
                    visivelmente abaulada e ultrapassando levemente a borda da
                    forma. O sinal de ponto ideal: ao pressionar com o dedo, a
                    marca retorna devagar — a estrutura está firme o suficiente
                    para suportar o crumble sem colapsar.</> },
      { text: <><strong>Crumble e assamento.</strong> Distribua
                    generosamente o <strong>Crumble de Chocolate</strong> sobre
                    a massa fermentada, pressionando levíssimamente para aderir
                    sem compactar a estrutura. Asse em forno preaquecido a
                    <strong>180°C</strong> por 25 a 35 minutos, até o crumble
                    estar escuro e uniforme e o termômetro marcar
                    <strong>88–92°C</strong> no centro. Aguarde 15 minutos antes
                    de desenformar.</> },
    ],
    notes: []
  },
  {
    id: "cuca-crumble-basico",
    title: "Crumble Básico para Cucas",
    chips: [{"label":"Farofa Clássica","accent":false},{"label":"Manteiga Gelada","accent":true},{"label":"Toque Cítrico & Canela","accent":false},{"label":"Cobertura Universal","accent":false}],
    meta: [{"label":"Rendimento","value":"cobertura para 1 forma grande"},{"label":"Preparo","value":"10–15 min (+ 30 min geladeira)"}],
    nutritionConfig: { portionSize: 80, portionLabel: "fatia (80g)" },
    image: "",
    ingredients: [
      {
        name: "A. Estrutura",
        items: [
          {
            name: "Açúcar refinado",
            qty: "510g"
          , nutrition: { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 } },
          {
            name: "Farinha de trigo",
            qty: "225g"
          , nutrition: { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1, saturatedFats: 0.2, fibers: 2.7, sodium: 2 } },
          {
            name: "Manteiga sem sal, gelada e cubada",
            qty: "180g"
          , nutrition: { calories: 717, carbs: 0.1, proteins: 0.8, totalFats: 81.1, saturatedFats: 51.4, fibers: 0, sodium: 11 } }
        ]
      },
      {
        name: "B. Aromáticos",
        items: [
          {
            name: "Raspas de limão siciliano ou tahiti",
            qty: "q.b."
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          {
            name: "Canela em pó",
            qty: "q.b."
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } }
        ]
      }
    ],
    method: [
      { text: <><strong>Secos.</strong> Combine o açúcar refinado, a farinha
                    de trigo, a canela em pó e as raspas de limão em tigela
                    ampla e fria — tirada da geladeira, se possível. Misture com
                    fouet até os aromáticos estarem completamente distribuídos.
                    A canela e as raspas tendem a grudar em blocos se não forem
                    bem homogeneizadas nos secos antes da manteiga entrar.</> },
      { text: <><strong>Incorporação da manteiga fria.</strong> Adicione os
                    cubos de manteiga gelada à mistura de secos. Com as pontas
                    dos dedos — nunca as palmas, que transferem calor —
                    pressione e esfregue a manteiga contra os secos em
                    movimentos rápidos. O objetivo é uma farofa com migalhas de
                    tamanhos variados: de pedaços do tamanho de uma ervilha a
                    fragmentos mais finos. Não homogeneize demais — a
                    irregularidade é a essência da textura da cuca.</> },
      { text: <><strong>Ponto ideal.</strong> A farofa pronta não deve
                    parecer areia fina nem ter pedaços de manteiga intactos e
                    visíveis. O teste: ao apertar um punhado com força e soltar,
                    ela mantém a forma por um segundo antes de desmanchar. Esse
                    comportamento indica que a manteiga está distribuída
                    corretamente — nem massuda nem solta demais para cobrir a
                    massa fermentada.</> },
      { text: <><strong>Refrigeração.</strong> Transfira para tigela coberta
                    com filme plástico e leve à geladeira por no mínimo
                    <strong>30 minutos</strong> antes de usar. Fria, a farofa
                    distribui melhor sobre a massa fermentada sem afundar
                    durante a segunda fermentação ou nos primeiros minutos no
                    forno. Pode ser preparado com até 3 dias de antecedência ou
                    <strong>congelado cru por até 3 meses</strong> — aplique
                    direto do freezer, sem descongelar.</> },
    ],
    notes: []
  },
  {
    id: "cuca-crumble-chocolate",
    title: "Crumble de Chocolate",
    chips: [{"label":"Farofa de Chocolate","accent":false},{"label":"Cacau + Café Solúvel","accent":true},{"label":"Açúcar Duplo","accent":false},{"label":"Perfil Intenso","accent":false}],
    meta: [{"label":"Rendimento","value":"cobertura para 1 forma grande"},{"label":"Preparo","value":"10–15 min (+ 30 min geladeira)"}],
    nutritionConfig: { portionSize: 80, portionLabel: "fatia (80g)" },
    image: "",
    ingredients: [
      {
        name: "A. Estrutura",
        items: [
          {
            name: "Açúcar refinado",
            qty: "360g"
          , nutrition: { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 } },
          {
            name: "Açúcar mascavo",
            qty: "150g"
          , nutrition: { calories: 369, carbs: 94, proteins: 0.8, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 12 } },
          {
            name: "Farinha de trigo",
            qty: "225g"
          , nutrition: { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1, saturatedFats: 0.2, fibers: 2.7, sodium: 2 } },
          {
            name: "Manteiga sem sal, gelada e cubada",
            qty: "180g"
          , nutrition: { calories: 717, carbs: 0.1, proteins: 0.8, totalFats: 81.1, saturatedFats: 51.4, fibers: 0, sodium: 11 } }
        ]
      },
      {
        name: "B. Sabor & Intensidade",
        items: [
          {
            name: "Cacau em pó 100%",
            qty: "18–25g"
          , nutrition: { calories: 228, carbs: 58, proteins: 20, totalFats: 14, saturatedFats: 8, fibers: 33, sodium: 21 } },
          {
            name: "Café solúvel",
            qty: "2–3g"
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          {
            name: "Canela em pó",
            qty: "q.b."
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          {
            name: "Sal fino",
            qty: "2g"
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 38758 } }
        ]
      }
    ],
    method: [
      { text: <><strong>Secos com cacau e café.</strong> Peneire juntos o
                    cacau em pó e o café solúvel sobre a mistura de açúcares
                    (refinado + mascavo), farinha, sal e canela em tigela ampla
                    e fria. Misture com fouet até o cacau estar completamente
                    incorporado e a mistura ter cor escura e uniforme — manchas
                    claras de farinha não distribuída comprometem a aparência e
                    o sabor do crumble assado.</> },
      { text: <><strong>Incorporação da manteiga fria.</strong> Adicione os
                    cubos de manteiga gelada à mistura de secos. Com as pontas
                    dos dedos, pressione e esfregue em movimentos rápidos até
                    obter migalhas irregulares. A combinação de açúcar mascavo,
                    cacau e manteiga gelada produz um crumble visivelmente mais
                    escuro, mais denso e com aroma intenso já a frio — diferente
                    da aparência arenosa do crumble básico.</> },
      { text: <><strong>Ponto ideal.</strong> O crumble de chocolate está
                    pronto quando apresentar migalhas de tamanhos variados, cor
                    uniformemente escura e aroma expressivo de cacau com fundo
                    de café. Ao apertar um punhado e soltar, mantém a forma por
                    um segundo antes de desmanchar — mesmo comportamento do
                    crumble básico, porém com textura ligeiramente mais densa
                    pelo açúcar mascavo.</> },
      { text: <><strong>Refrigeração.</strong> Leve à geladeira por no
                    mínimo <strong>30 minutos</strong> antes de aplicar sobre a
                    massa fermentada. Pode ser preparado com até 3 dias de
                    antecedência ou congelado cru. O açúcar mascavo absorve
                    umidade do ambiente com velocidade maior que o refinado —
                    aplique sempre frio ou <strong>direto do freezer</strong>.</> },
    ],
    notes: []
  },
  {
    id: "bolo-pao-de-lo-padrao",
    title: "Pão de Ló Padrão",
    chips: [{"label":"Massa Aerada","accent":false},{"label":"Baunilha · Vinagre Estabilizador","accent":true},{"label":"Ponto de Fita","accent":false},{"label":"Base Universal","accent":false}],
    meta: [{"label":"Rendimento","value":"2 discos Ø20cm ou 1 forma 20×30cm"},{"label":"Forno","value":"180°C · 25–30 min"}],
    nutritionConfig: { portionSize: 80, portionLabel: "fatia (80g)" },
    image: "images/el-guapo-img-05.webp",
    ingredients: [
      {
        name: "Fórmula (100% = 150g farinha)",
        items: [
          {
            name: "Farinha de trigo",
            qty: "150g",
            pct: 100
          , nutrition: { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1, saturatedFats: 0.2, fibers: 2.7, sodium: 2 } },
          {
            name: "Açúcar refinado",
            qty: "200g",
            pct: 133.3
          , nutrition: { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 } },
          {
            name: "Ovos inteiros",
            qty: "200g",
            pct: 133.3
          , nutrition: { calories: 143, carbs: 1.6, proteins: 13, totalFats: 8.9, saturatedFats: 2.7, fibers: 0, sodium: 168 } },
          {
            name: "Leite integral",
            qty: "62g",
            pct: 41.3
          , nutrition: { calories: 60, carbs: 4.7, proteins: 3.2, totalFats: 3.3, saturatedFats: 2.1, fibers: 0, sodium: 44 } },
          {
            name: "Óleo de soja",
            qty: "46g",
            pct: 30.7
          , nutrition: { calories: 884, carbs: 0, proteins: 0, totalFats: 100, saturatedFats: 15, fibers: 0, sodium: 0 } },
          {
            name: "Fermento em pó químico",
            qty: "12g",
            pct: 8
          , nutrition: { calories: 53, carbs: 24.3, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 14234 } },
          {
            name: "Vinagre de álcool ou vinho branco",
            qty: "~15g",
            pct: 1
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          {
            name: "Essência de baunilha",
            qty: "~5g",
            pct: 1
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } }
        ]
      }
    ],
    method: [
      { text: <><strong>Preparação dos secos.</strong> Peneire a farinha de
                    trigo com o fermento em pó em tigela separada e reserve.
                    Peneirar juntos garante que o fermento esteja distribuído de
                    forma homogênea na farinha — caso contrário, áreas de
                    concentração criam bolsas de CO₂ que deformam o miolo
                    durante o assamento.</> },
      { text: <><strong>Ponto de fita — a base da estrutura.</strong> Na
                    tigela da batedeira com globo, bata os ovos inteiros com o
                    açúcar refinado e a baunilha em velocidade alta por
                    <strong>5 a 8 minutos</strong>, até a mistura atingir o
                    ponto de fita: pálida, quase branca, triplicada em volume, e
                    ao levantar o globo a massa cai em fita que mantém o traço
                    por 3 a 4 segundos antes de se dissolver. Essa espuma de
                    ovos é o único agente de crescimento físico da receita —
                    trate com cuidado a partir daqui.</> },
      { text: <><strong>Vinagre — estabilização da espuma.</strong> Com a
                    batedeira ainda em velocidade alta, adicione o vinagre e
                    bata por mais 30 segundos. O ácido do vinagre reage com as
                    proteínas do ovo, tornando a espuma mais estável e
                    resistente ao colapso durante as próximas etapas. O sabor de
                    vinagre desaparece completamente no forno — não há risco
                    sensorial.</> },
      { text: <><strong>Incorporação dos líquidos.</strong> Reduza para
                    velocidade mínima. Com o leite e o óleo pré-misturados em
                    copo separado, adicione em fio fino e contínuo enquanto a
                    batedeira trabalha. Em velocidade baixa, os líquidos se
                    integram sem colapsar a estrutura aerada. Não bata mais do
                    que o necessário para homogeneizar.</> },
      { text: <><strong>Dobrar os secos.</strong> Desligue a batedeira.
                    Adicione a farinha peneirada em 2 adições, dobrando com
                    espátula de silicone com movimentos lentos de baixo para
                    cima — nunca circular, nunca com fouet. Pare imediatamente
                    ao não ver mais manchas de farinha. Excesso de mistura
                    desenvolve glúten, tornando o miolo borrachento. A ligeira
                    variação na textura é intencional e correta.</> },
      { text: <><strong>Assar.</strong> Distribua a massa em formas untadas
                    e enfarinhadas (ou forradas com papel manteiga). Leve ao
                    forno preaquecido a <strong>180°C</strong>.
                    <strong>Não abra o forno nos primeiros 20 minutos</strong> —
                    a variação de temperatura colapsa a estrutura física de
                    espuma antes do glúten e do amido fixarem o miolo. Teste com
                    palito a partir de 25 minutos; deve sair seco. Termômetro:
                    93–96°C no centro.</> },
      { text: <><strong>Resfriamento e corte.</strong> Retire do forno e
                    deixe repousar <strong>10 minutos</strong> na forma antes de
                    desenformar. Transfira para grade e aguarde esfriar
                    completamente — o corte quente comprime o miolo e gera
                    superfícies irregulares que comprometem a montagem das
                    camadas. Para corte limpo e uniforme, refrigere por 2h antes
                    de fatiar com fio dental ou faca de serra.</> },
    ],
    notes: []
  },
  {
    id: "bolo-cenoura-gabriela",
    title: "Bolo de Cenoura da Gabriela",
    chips: [{"label":"Cenoura + Óleo","accent":false},{"label":"Cobertura Casquinha ou Cremosa","accent":true},{"label":"Massa Úmida","accent":false},{"label":"Forno 180°C","accent":false}],
    meta: [{"label":"Rendimento","value":"1 bolo médio / 10–12 fatias"},{"label":"Forno","value":"180°C · 40–50 min"}],
    nutritionConfig: { portionSize: 80, portionLabel: "fatia (80g)" },
    image: "images/bolo-cenoura-gabriela.jpeg",
    ingredients: [
      {
        name: "Massa",
        items: [
          {
            name: "Cenouras picadas",
            qty: "400g",
            pct: 4
          , nutrition: { calories: 41, carbs: 9.6, proteins: 0.9, totalFats: 0.2, saturatedFats: 0, fibers: 3.2, sodium: 69 } },
          {
            name: "Óleo vegetal",
            qty: "200ml",
            pct: 1
          , weightInGrams: 200, nutrition: { calories: 884, carbs: 0, proteins: 0, totalFats: 100, saturatedFats: 15, fibers: 0, sodium: 0 } },
          {
            name: "Ovos inteiros",
            qty: "150g",
            pct: 3
          , nutrition: { calories: 143, carbs: 1.6, proteins: 13, totalFats: 8.9, saturatedFats: 2.7, fibers: 0, sodium: 168 } },
          {
            name: "Açúcar refinado",
            qty: "400g",
            pct: 2
          , nutrition: { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 } },
          {
            name: "Farinha de trigo",
            qty: "330g",
            pct: 2
          , nutrition: { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1, saturatedFats: 0.2, fibers: 2.7, sodium: 2 } },
          {
            name: "Fermento em pó químico",
            qty: "12g",
            pct: 1
          , nutrition: { calories: 53, carbs: 24.3, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 14234 } }
        ]
      },
      {
        name: "Cobertura Casquinha",
        items: [
          {
            name: "Açúcar refinado",
            qty: "1 xícara"
          , weightInGrams: 180, nutrition: { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 } },
          {
            name: "Cacau em pó 50%",
            qty: "1 xícara"
          , weightInGrams: 90, nutrition: { calories: 228, carbs: 58, proteins: 20, totalFats: 14, saturatedFats: 8, fibers: 33, sodium: 21 } },
          {
            name: "Leite integral",
            qty: "6 col. sopa"
          , weightInGrams: 90, nutrition: { calories: 60, carbs: 4.7, proteins: 3.2, totalFats: 3.3, saturatedFats: 2.1, fibers: 0, sodium: 44 } },
          {
            name: "Manteiga sem sal",
            qty: "1 col. sopa"
          , weightInGrams: 20, nutrition: { calories: 717, carbs: 0.1, proteins: 0.8, totalFats: 81.1, saturatedFats: 51.4, fibers: 0, sodium: 11 } }
        ]
      },
      {
        name: "Cobertura Cremosa",
        items: [
          {
            name: "Manteiga sem sal",
            qty: "100g"
          , nutrition: { calories: 717, carbs: 0.1, proteins: 0.8, totalFats: 81.1, saturatedFats: 51.4, fibers: 0, sodium: 11 } },
          {
            name: "Açúcar refinado",
            qty: "1½ xícara"
          , weightInGrams: 270, nutrition: { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 } },
          {
            name: "Cacau em pó 50%",
            qty: "1 xícara"
          , weightInGrams: 90, nutrition: { calories: 228, carbs: 58, proteins: 20, totalFats: 14, saturatedFats: 8, fibers: 33, sodium: 21 } },
          {
            name: "Leite integral",
            qty: "3 xícaras"
          , weightInGrams: 360, nutrition: { calories: 60, carbs: 4.7, proteins: 3.2, totalFats: 3.3, saturatedFats: 2.1, fibers: 0, sodium: 44 } }
        ]
      }
    ],
    method: [
      { text: <><strong>Preaqueça o forno</strong> a 180°C e prepare uma
                    forma média. Unte com manteiga e polvilhe farinha, ou forre
                    com papel manteiga. Peneire a farinha e reserve para
                    incorporar ao final.</> },
      { text: <><strong>Bata a massa líquida.</strong> No liquidificador,
                    processe as cenouras picadas, os ovos, o óleo e o açúcar até
                    obter mistura homogênea. A batida rápida extrai suco da
                    cenoura e cria massa mais uniforme.</> },
      { text: <><strong>Incorpore a farinha.</strong> Transfira a mistura
                    para uma tigela grande e adicione a farinha peneirada em
                    duas etapas. Misture com espátula ou fouet delicadamente até
                    a massa ficar uniforme.</> },
      { text: <><strong>Finalize com o fermento.</strong> Acrescente o
                    fermento em pó e mexa apenas para incorporá-lo. Mexer demais
                    ativa o glúten e reduz a maciez característica do bolo de
                    cenoura.</> },
      { text: <><strong>Asse o bolo.</strong> Despeje a massa na forma
                    preparada e leve ao forno preaquecido a 180°C. Asse por
                    40–50 minutos ou até o palito sair limpo no centro.</> },
      { text: <><strong>Prepare a cobertura casquinha.</strong> Em panela
                    média, misture açúcar, cacau em pó, leite e manteiga. Leve
                    ao fogo baixo, mexendo até começar a borbulhar. Conte 1
                    minuto e desligue. Despeje sobre o bolo imediatamente e
                    deixe secar por cerca de 1 hora.</> },
      { text: <><strong>Prepare a cobertura cremosa.</strong> Bata a
                    manteiga com o açúcar até ficar homogêneo. Adicione o cacau
                    e o leite em etapas, misturando em fogo baixo até ganhar
                    brilho e consistência cremosa. Aplique morna sobre o bolo
                    para que fixe sem escorrer demais.</> },
    ],
    notes: []
  },
  {
    id: "bolo-pao-de-lo-chocolate",
    title: "Pão de Ló de Chocolate",
    chips: [{"label":"Cacau + Água (sem lactose)","accent":false},{"label":"Massa Aerada · Perfil Intenso","accent":true},{"label":"Ponto de Fita","accent":false},{"label":"Base do Bolo Prestígio","accent":false}],
    meta: [{"label":"Rendimento","value":"2 discos Ø20cm ou 1 forma 20×30cm"},{"label":"Forno","value":"180°C · 25–30 min"}],
    nutritionConfig: { portionSize: 80, portionLabel: "fatia (80g)" },
    image: "images/el-guapo-img-06.webp",
    ingredients: [
      {
        name: "Fórmula (100% = 130g farinha)",
        items: [
          {
            name: "Farinha de trigo",
            qty: "130g",
            pct: 100
          , nutrition: { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1, saturatedFats: 0.2, fibers: 2.7, sodium: 2 } },
          {
            name: "Açúcar refinado",
            qty: "200g",
            pct: 153.8
          , nutrition: { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 } },
          {
            name: "Ovos inteiros",
            qty: "200g",
            pct: 153.8
          , nutrition: { calories: 143, carbs: 1.6, proteins: 13, totalFats: 8.9, saturatedFats: 2.7, fibers: 0, sodium: 168 } },
          {
            name: "Água",
            qty: "60g",
            pct: 46.2
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          {
            name: "Óleo de soja",
            qty: "60g",
            pct: 46.2
          , nutrition: { calories: 884, carbs: 0, proteins: 0, totalFats: 100, saturatedFats: 15, fibers: 0, sodium: 0 } },
          {
            name: "Cacau em pó 100%",
            qty: "20g",
            pct: 15.4
          , nutrition: { calories: 228, carbs: 58, proteins: 20, totalFats: 14, saturatedFats: 8, fibers: 33, sodium: 21 } },
          {
            name: "Fermento em pó químico",
            qty: "12g",
            pct: 9.2
          , nutrition: { calories: 53, carbs: 24.3, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 14234 } }
        ]
      }
    ],
    method: [
      { text: <><strong>Secos com cacau.</strong> Peneire a farinha de
                    trigo, o cacau em pó e o fermento químico juntos em tigela
                    separada. O cacau deve ser peneirado obrigatoriamente — sua
                    tendência a formar grumos provoca manchas escuras
                    irregulares no miolo se incorporado sem peneirar. Reserve.</> },
      { text: <><strong>Ponto de fita.</strong> Na batedeira com globo, bata
                    os ovos inteiros com o açúcar refinado em velocidade alta
                    por <strong>5 a 8 minutos</strong> até atingir ponto de
                    fita: massa pálida, quase três vezes o volume inicial, traço
                    que persiste por 3 a 4 segundos ao cair do globo. Sem leite
                    ou manteiga nesta receita, os ovos são a única fonte de
                    estrutura e umidade — o ponto de fita define a qualidade do
                    miolo final.</> },
      { text: <><strong>Líquidos.</strong> Reduza para velocidade mínima.
                    Com a água e o óleo pré-misturados, adicione em fio fino e
                    contínuo. A água (no lugar do leite) é escolha deliberada:
                    sem caseínas, o glúten tem menos estrutura proteica para se
                    desenvolver, resultando em miolo mais macio e sedoso — a
                    textura ideal para um pão de ló que será cortado e recheado.</> },
      { text: <><strong>Dobrar os secos com cacau.</strong> Desligue a
                    batedeira. Adicione a farinha+cacau+fermento peneirados em 2
                    adições com espátula, dobrando de baixo para cima com
                    delicadeza. A mistura vai escurecer rapidamente ao entrar o
                    cacau — é o indicativo visual de que está sendo incorporado
                    de forma homogênea. Pare assim que não houver mais traços de
                    pó claro.</> },
      { text: <><strong>Forma e forno.</strong> Divida a massa nas formas
                    untadas e polvilhadas com <strong>cacau em pó</strong> —
                    nunca farinha branca, que deixa borda esbranquiçada na
                    lateral do disco. Leve ao forno preaquecido a
                    <strong>180°C por 25 a 30 minutos</strong>. Não abra nos
                    primeiros 20 minutos. Teste com palito: seco ao centro.
                    Termômetro: 93–96°C.</> },
      { text: <><strong>Resfriamento.</strong> Aguarde 10 minutos na forma,
                    desenformar na grade e resfriar completamente antes de
                    manusear. Para o <strong>Bolo Prestígio</strong>, refrigere
                    os discos por 2h antes de montar — o disco frio absorve a
                    calda mais lentamente, distribuindo a umidade de forma
                    uniforme pelo miolo sem encharcar.</> },
    ],
    notes: []
  },
  {
    id: "bolo-brigadeiro-el-guapo",
    title: "Brigadeiro El Guapo",
    chips: [{"label":"Recheio de Bolo","accent":false},{"label":"Chocolate Meio Amargo + Cacau 70%","accent":true},{"label":"Ganache-Brigadeiro","accent":false},{"label":"Base do Bolo Prestígio","accent":false}],
    meta: [{"label":"Rendimento","value":"recheio para 1 bolo de 3 camadas Ø20cm"},{"label":"Preparo","value":"15–20 min + 2h geladeira"}],
    nutritionConfig: { portionSize: 80, portionLabel: "fatia (80g)" },
    image: "images/el-guapo-img-07.webp",
    ingredients: [
      {
        name: "Fórmula",
        items: [
          {
            name: "Leite condensado",
            qty: "395g"
          , nutrition: { calories: 321, carbs: 57.3, proteins: 7.7, totalFats: 8.1, saturatedFats: 5, fibers: 0, sodium: 127 } },
          {
            name: "Creme de leite",
            qty: "200g"
          , nutrition: { calories: 223, carbs: 4.5, proteins: 2.3, totalFats: 22, saturatedFats: 13, fibers: 0, sodium: 47 } },
          {
            name: "Chocolate meio amargo em barra",
            qty: "80g"
          , nutrition: { calories: 536, carbs: 62.7, proteins: 5.2, totalFats: 29.8, saturatedFats: 18.2, fibers: 8.2, sodium: 15 } },
          {
            name: "Cacau em pó 70%",
            qty: "~8g",
            pct: 1
          , nutrition: { calories: 228, carbs: 58, proteins: 20, totalFats: 14, saturatedFats: 8, fibers: 33, sodium: 21 } }
        ]
      }
    ],
    method: [
      { text: <><strong>Dissolver o cacau a frio.</strong> Em panela de
                    fundo grosso fora do fogo, misture o leite condensado com o
                    cacau em pó, mexendo com espátula até o cacau estar
                    completamente dissolvido e sem grumos. Dissolver a frio é
                    essencial — cacau em pó adicionado em leite condensado
                    quente gruda no fundo da panela antes de se integrar,
                    formando pontos pretos amargos no recheio final.</> },
      { text: <><strong>Adicionar o chocolate.</strong> Pique o chocolate
                    meio amargo em pedaços pequenos e uniformes e adicione à
                    mistura de leite condensado e cacau. Leve ao fogo
                    médio-baixo, mexendo constantemente com espátula de silicone
                    — raspe o fundo e as laterais da panela de forma contínua
                    para evitar queimar o açúcar do leite condensado, que
                    carameliza rapidamente em fogo alto.</> },
      { text: <><strong>Ponto de recheio.</strong> Cozinhe mexendo sempre
                    por <strong>8 a 12 minutos</strong> até atingir o ponto de
                    recheio de bolo: a massa começa a desgrudar do fundo
                    formando um sulco limpo que fecha lentamente. É um ponto
                    mais mole que o brigadeiro de enrolar — a consistência deve
                    lembrar uma ganache macia a quente. Ao esfriar e refrigerar,
                    firma consideravelmente.</> },
      { text: <><strong>Creme de leite e finalização.</strong> Retire do
                    fogo. Adicione o creme de leite e misture vigorosamente até
                    incorporar completamente — o creme de leite quente se
                    integra sem talhar. Ele ajusta a consistência final do
                    recheio: mais creme = mais mole e cremoso; menos = mais
                    firme e denso. Cubra com filme plástico em contato com a
                    superfície para evitar película.</> },
      { text: <><strong>Resfriamento e uso.</strong> Deixe esfriar
                    completamente em temperatura ambiente e refrigere por
                    <strong>no mínimo 2 horas</strong> antes de usar. Frio, o
                    brigadeiro firma e ganha consistência de recheio cremoso que
                    não escorrega entre as camadas do bolo. Para consistência
                    máxima de corte, refrigere o bolo montado por 4 horas após
                    recheio.</> },
    ],
    notes: []
  },
  {
    id: "bolo-recheio-coco",
    title: "Recheio de Coco El Guapo",
    chips: [{"label":"Recheio de Bolo","accent":false},{"label":"Coco em Flocos · Cremoso","accent":true},{"label":"Leite Condensado + Creme de Leite","accent":false},{"label":"Base do Bolo Prestígio","accent":false}],
    meta: [{"label":"Rendimento","value":"recheio para 1 bolo de 3 camadas Ø20cm"},{"label":"Preparo","value":"15–20 min + 2h geladeira"}],
    nutritionConfig: { portionSize: 80, portionLabel: "fatia (80g)" },
    image: "images/el-guapo-img-08.webp",
    ingredients: [
      {
        name: "Fórmula",
        items: [
          {
            name: "Leite condensado",
            qty: "395g"
          , nutrition: { calories: 321, carbs: 57.3, proteins: 7.7, totalFats: 8.1, saturatedFats: 5, fibers: 0, sodium: 127 } },
          {
            name: "Creme de leite",
            qty: "200g"
          , nutrition: { calories: 223, carbs: 4.5, proteins: 2.3, totalFats: 22, saturatedFats: 13, fibers: 0, sodium: 47 } },
          {
            name: "Leite integral",
            qty: "~200g"
          , nutrition: { calories: 60, carbs: 4.7, proteins: 3.2, totalFats: 3.3, saturatedFats: 2.1, fibers: 0, sodium: 44 } },
          {
            name: "Coco ralado em flocos",
            qty: "100g"
          , nutrition: { calories: 663, carbs: 23.7, proteins: 6.9, totalFats: 64.5, saturatedFats: 57, fibers: 16.3, sodium: 37 } }
        ]
      }
    ],
    method: [
      { text: <><strong>Base líquida.</strong> Em panela de fundo grosso,
                    combine o leite condensado com o leite integral. Meça o
                    leite enchendo a caixinha de creme de leite já vazia — a
                    medida prática garante aproximadamente 200g sem necessidade
                    de balança extra. Misture os dois com espátula antes de
                    levar ao fogo para homogeneizar as densidades distintas dos
                    dois líquidos.</> },
      { text: <><strong>Coco e cozimento.</strong> Adicione o coco ralado em
                    flocos à panela com os líquidos. Leve ao fogo médio, mexendo
                    constantemente com espátula. O coco absorve parte do líquido
                    durante o cozimento, inchando e liberando os óleos naturais
                    do coco na mistura — esse processo é visível pela mudança de
                    cor do coco (mais translúcido e brilhante) e pelo aumento de
                    viscosidade do recheio. Cozinhe por
                    <strong>5 a 8 minutos</strong> após começar a borbulhar.</> },
      { text: <><strong>Ponto e finalização.</strong> O recheio está no
                    ponto quando a espátula deixa um sulco no fundo que fecha
                    lentamente — consistência de mingau encorpado. Retire do
                    fogo e adicione o creme de leite, misturando vigorosamente.
                    O creme de leite amolece a consistência final e adiciona a
                    gordura de laticínio que equilibra a doçura intensa do leite
                    condensado. Cubra com filme em contato com a superfície.</> },
      { text: <><strong>Resfriamento.</strong> Deixe esfriar em temperatura
                    ambiente e refrigere por <strong>no mínimo 2 horas</strong>.
                    O recheio de coco firma substancialmente com o frio — o que
                    parece mole quente transforma-se em recheio cremoso e
                    encorpado após refrigerado, com textura ideal para suportar
                    o peso do disco de bolo sem escorrer.</> },
    ],
    notes: []
  },
  {
    id: "pao-de-queijo-heuller",
    title: "Pão de Queijo do Heuller",
    chips: [{"label":"Método Escaldamento","accent":false},{"label":"Blend 50/50 Polvilhos","accent":true},{"label":"Queijo Curado","accent":false},{"label":"Crosta Crocante","accent":false}],
    meta: [{"label":"Rendimento","value":"~50 un. (30g)"},{"label":"Dificuldade","value":"Média"}],
    nutritionConfig: { portionSize: 80, portionLabel: "fatia (80g)" },
    image: "images/el-guapo-img-09.webp",
    ingredients: [
      {
        name: "A. Blend de Amidos (Estrutura)",
        items: [
          {
            name: "Polvilho Azedo",
            qty: "250g",
            pct: 50
          , nutrition: { calories: 353, carbs: 87.2, proteins: 0.4, totalFats: 0.1, saturatedFats: 0, fibers: 0, sodium: 1 } },
          {
            name: "Polvilho Doce",
            qty: "250g",
            pct: 50
          , nutrition: { calories: 353, carbs: 87.2, proteins: 0.4, totalFats: 0.1, saturatedFats: 0, fibers: 0, sodium: 1 } },
          {
            name: "Sal Refinado",
            qty: "10–12g",
            pct: 2
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 38758 } }
        ]
      },
      {
        name: "B. Escaldo (Líquidos + Gordura)",
        items: [
          {
            name: "Leite Integral",
            qty: "150ml",
            pct: 30
          , weightInGrams: 150, nutrition: { calories: 60, carbs: 4.7, proteins: 3.2, totalFats: 3.3, saturatedFats: 2.1, fibers: 0, sodium: 44 } },
          {
            name: "Água",
            qty: "150ml",
            pct: 30
          , weightInGrams: 150, nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          {
            name: "Gordura (Óleo/Banha/Manteiga)",
            qty: "100ml",
            pct: 18
          , weightInGrams: 100, nutrition: { calories: 717, carbs: 0.1, proteins: 0.8, totalFats: 81.1, saturatedFats: 51.4, fibers: 0, sodium: 11 } }
        ]
      },
      {
        name: "C. Liga e Sabor (Finalização)",
        items: [
          {
            name: "Ovos Tipo Grande/Extra",
            qty: "3–4 un.",
            pct: 150
          , weightInGrams: 150, nutrition: { calories: 143, carbs: 1.6, proteins: 13, totalFats: 8.9, saturatedFats: 2.7, fibers: 0, sodium: 168 } },
          {
            name: "Queijo Meia Cura / Canastra, ralado grosso",
            qty: "350g",
            pct: 70
          , nutrition: { calories: 318, carbs: 1.5, proteins: 21.2, totalFats: 25.1, saturatedFats: 16, fibers: 0, sodium: 477 } },
          {
            name: "Queijo Parmesão, ralado fino",
            qty: "50g",
            pct: 10
          , nutrition: { calories: 431, carbs: 3.2, proteins: 38.5, totalFats: 28.6, saturatedFats: 18.2, fibers: 0, sodium: 1528 } }
        ]
      }
    ],
    method: [
      { text: <><strong>Preparação dos secos.</strong> Em uma tigela grande,
                    combine os 250g de polvilho azedo, 250g de polvilho doce e o
                    sal (10–12g, ajustando conforme a salinidade do queijo).
                    Misture bem com um fouet para distribuir uniformemente.
                    Reserve.</> },
      { text: <><strong>Escaldo — Gelatinização.</strong> Em uma panela
                    média, combine 150ml de leite integral, 150ml de água e
                    100ml de gordura. Leve ao fogo médio-alto e deixe ferver
                    completamente — o líquido deve estar em ebulição vigorosa.
                    Retire do fogo imediatamente e despeje sobre a mistura de
                    polvilhos de uma só vez. Mexa vigorosamente com uma colher
                    de pau até formar uma massa homogênea e pegajosa. O calor
                    gelatiniza o amido, criando a estrutura elástica
                    característica.</> },
      { text: <><strong>Resfriamento parcial.</strong> Deixe a massa esfriar
                    por 5 a 10 minutos, mexendo ocasionalmente, até estar morna
                    ao toque. Se adicionar os ovos com a massa muito quente,
                    eles cozinharão e a emulsão não se formará corretamente.</> },
      { text: <><strong>Incorporação dos ovos.</strong> Adicione os ovos um
                    de cada vez, misturando completamente antes do próximo. A
                    massa começará firme e quebradiça, mas conforme os ovos são
                    incorporados, ela se tornará lisa, elástica e levemente
                    brilhante. Se após 3 ovos a massa ainda estiver muito firme,
                    adicione o quarto.</> },
      { text: <><strong>Adição dos queijos.</strong> Adicione os 350g de
                    queijo meia cura ralado grosso e os 50g de parmesão ralado
                    fino. Misture até distribuir uniformemente. Ajuste o sal
                    neste momento se necessário, provando a massa crua.</> },
      { text: <><strong>Ponto de hidratação visual.</strong> A massa deve
                    estar homogênea, elástica e levemente pegajosa — não deve
                    escorrer, mas também não deve estar seca ou quebradiça.
                    Confie no tato: deve grudar levemente nas mãos untadas de
                    óleo, mas se soltar com facilidade. Este é o ponto crítico
                    da receita.</> },
      { text: <><strong>Modelagem.</strong> Unte levemente as mãos com óleo.
                    Porcione em bolinhas de 30g (coquetel) ou 50g (lanche). Role
                    cada porção entre as palmas até formar esferas lisas e
                    uniformes. Disponha em assadeira untada ou com papel
                    manteiga, deixando espaço entre elas.</> },
      { text: <><strong>Assamento.</strong> Preaqueça o forno a 200–220°C.
                    Asse por 20 a 25 minutos (30g) ou 25 a 30 minutos (50g), até
                    a superfície estar dourada e levemente rachada. Não abra o
                    forno nos primeiros 15 minutos: a perda de vapor interrompe
                    a expansão.</> },
      { text: <><strong>Resfriamento e armazenamento.</strong> Deixe esfriar
                    por 5 minutos antes de servir. Para armazenar, congele as
                    bolinhas cruas em assadeira por 2h, transfira para sacos
                    plásticos e asse direto do freezer, adicionando 5 minutos ao
                    tempo de forno.</> },
    ],
    notes: []
  },
  {
    id: "pao-heuller-gabriela",
    title: "Pão do Heuller e da Gabriela",
    chips: [{"label":"Massa Enriquecida","accent":false},{"label":"Baunilha · Manteiga","accent":true},{"label":"~53% hidratação","accent":false},{"label":"Pão Doce Afetivo","accent":false}],
    meta: [{"label":"Base de farinha","value":"600g"},{"label":"Hidratação aprox.","value":"~53%"}],
    nutritionConfig: { portionSize: 80, portionLabel: "fatia (80g)" },
    image: "images/el-guapo-img-10.webp",
    ingredients: [
      {
        name: "Fórmula (100% = 600g farinha)",
        items: [
          {
            name: "Farinha de trigo",
            qty: "600g",
            pct: 100
          , nutrition: { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1, saturatedFats: 0.2, fibers: 2.7, sodium: 2 } },
          {
            name: "Leite integral",
            qty: "320g",
            pct: 53.3
          , nutrition: { calories: 60, carbs: 4.7, proteins: 3.2, totalFats: 3.3, saturatedFats: 2.1, fibers: 0, sodium: 44 } },
          {
            name: "Açúcar",
            qty: "60g",
            pct: 10
          , nutrition: { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 } },
          {
            name: "Ovos",
            qty: "2 un.",
            pct: 16.7
          , weightInGrams: 100, nutrition: { calories: 143, carbs: 1.6, proteins: 13, totalFats: 8.9, saturatedFats: 2.7, fibers: 0, sodium: 168 } },
          {
            name: "Manteiga sem sal, ponto pomada",
            qty: "80g",
            pct: 13.3
          , nutrition: { calories: 717, carbs: 0.1, proteins: 0.8, totalFats: 81.1, saturatedFats: 51.4, fibers: 0, sodium: 11 } },
          {
            name: "Sal",
            qty: "12g",
            pct: 2
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 38758 } },
          {
            name: "Fermento biológico seco",
            qty: "5g",
            pct: 0.83
          , nutrition: { calories: 315, carbs: 54.3, proteins: 25.2, totalFats: 5.7, saturatedFats: 0.9, fibers: 8.1, sodium: 153 } },
          {
            name: "Essência de baunilha",
            qty: "1 col. sopa"
          , weightInGrams: 15, nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } }
        ]
      }
    ],
    method: [
      { text: <><strong>Ativação do fermento.</strong> Dissolva os 5g de
                    fermento biológico seco no leite morno (entre 32°C e 38°C)
                    com uma pitada do açúcar da receita. Aguarde 8 a 10 minutos
                    até formar espuma ativa na superfície — sinal de que o
                    fermento está vivo e pronto para trabalhar.</> },
      { text: <><strong>Mistura inicial.</strong> Na tigela da batedeira com
                    gancho, combine a farinha, o açúcar restante e o sal.
                    Misture os secos. Adicione os ovos levemente batidos, a
                    essência de baunilha e o leite com fermento já ativado.
                    Misture em velocidade baixa por 2 a 3 minutos, apenas até a
                    farinha hidratar.</> },
      { text: <><strong>Desenvolvimento do glúten.</strong> Aumente para
                    velocidade média e sove por 8 a 10 minutos, até a massa
                    estar lisa, homogênea e se descolando das paredes da tigela.
                    Por se tratar de uma massa enriquecida, o glúten se forma
                    com mais lentidão — respeite o tempo de sovagem.</> },
      { text: <><strong>Incorporação da manteiga.</strong> Com a batedeira
                    em velocidade baixa, adicione a manteiga em ponto pomada em
                    3 ou 4 porções, esperando a incorporação completa de cada
                    uma. A massa pode parecer que desintegra nos primeiros
                    momentos — continue batendo. Após toda a manteiga absorvida,
                    bata até a massa voltar a ser completamente lisa e levemente
                    brilhante.</> },
      { text: <><strong>Primeira fermentação.</strong> Forme uma bola,
                    transfira para tigela levemente untada com manteiga, cubra
                    com filme plástico e deixe fermentar em temperatura ambiente
                    por 1h a 1h30, até dobrar de volume. Para sabor mais
                    profundo, após 20 minutos em temperatura ambiente, leve à
                    geladeira por 8 a 12h.</> },
      { text: <><strong>Modelagem.</strong> Desgaseifique suavemente a massa
                    na bancada enfarinhada. Modele conforme o formato desejado:
                    pão de forma, rolinhos (bolinhas de 60g) ou trança. Cubra e
                    deixe descansar por 10 minutos antes da segunda fermentação.</> },
      { text: <><strong>Segunda fermentação.</strong> Cubra com filme
                    plástico ou pano úmido e deixe fermentar por mais 45 a 60
                    minutos em temperatura ambiente, até o pão estar
                    visivelmente crescido e o dedo deixar uma marca suave quando
                    pressionado.</> },
      { text: <><strong>Pincelagem e assamento.</strong> Pincele suavemente
                    com ovo batido ou leite para obter casca dourada e
                    brilhante. Asse em forno preaquecido a 180°C por 25 a 35
                    minutos, até a casca estar uniformemente dourada. O
                    termômetro deve marcar <strong>88–92°C</strong> no centro.</> },
      { text: <><strong>Resfriamento.</strong> Retire do forno e deixe
                    repousar na forma por 10 minutos. Em seguida, desenforme e
                    deixe esfriar completamente sobre uma grade antes de fatiar
                    — cortar o pão quente comprime o miolo ainda úmido,
                    resultando em textura gomosa.</> },
    ],
    notes: []
  },
  {
    id: "bolo-panetone-el-guapo",
    title: "Panetone El Guapo",
    chips: [{"label":"Método Indireto · Esponja","accent":false},{"label":"Longa Fermentação","accent":true},{"label":"Aroma Artesanal","accent":false},{"label":"Gotas de Chocolate","accent":false}],
    meta: [{"label":"Rendimento","value":"2 panetones de 500g"},{"label":"Preparo total","value":"1h + 12–18h fermentação"}],
    nutritionConfig: { portionSize: 80, portionLabel: "fatia (80g)" },
    image: "images/el-guapo-img-11.webp",
    ingredients: [
      {
        name: "Esponja (Pré-fermento)",
        items: [
          {
            name: "Farinha de trigo",
            qty: "100g",
            pct: 25
          , nutrition: { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1, saturatedFats: 0.2, fibers: 2.7, sodium: 2 } },
          {
            name: "Suco de laranja Bahia ou água gelada",
            qty: "100g",
            pct: 25
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          {
            name: "Fermento biológico seco",
            qty: "10g",
            pct: 2.5
          , nutrition: { calories: 315, carbs: 54.3, proteins: 25.2, totalFats: 5.7, saturatedFats: 0.9, fibers: 8.1, sodium: 153 } }
        ]
      },
      {
        name: "Massa Principal (100% = 400g Farinha)",
        items: [
          {
            name: "Esponja preparada",
            qty: "toda"
           },
          {
            name: "Farinha de trigo W300+ ou Tipo 1 Forte",
            qty: "300g",
            pct: 75
          , nutrition: { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1, saturatedFats: 0.2, fibers: 2.7, sodium: 2 } },
          {
            name: "Gemas de ovos",
            qty: "5 un. (~90g)",
            pct: 22.5
          , nutrition: { calories: 322, carbs: 3.6, proteins: 15.9, totalFats: 26.5, saturatedFats: 9.5, fibers: 0, sodium: 48 } },
          {
            name: "Suco de Laranja Bahia gelado",
            qty: "100g",
            pct: 25
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          {
            name: "Açúcar refinado ou demerara",
            qty: "100g",
            pct: 25
          , nutrition: { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 } },
          {
            name: "Leite em pó integral",
            qty: "20g",
            pct: 5
          , nutrition: { calories: 496, carbs: 38, proteins: 26, totalFats: 26.7, saturatedFats: 16.7, fibers: 0, sodium: 371 } },
          {
            name: "Mel de abelha ou glucose",
            qty: "15g",
            pct: 3.75
          , nutrition: { calories: 304, carbs: 82.4, proteins: 0.3, totalFats: 0, saturatedFats: 0, fibers: 0.2, sodium: 4 } },
          {
            name: "Sal refinado",
            qty: "5g",
            pct: 1.25
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 38758 } },
          {
            name: "Manteiga sem sal ponto pomada",
            qty: "100g",
            pct: 25
          , nutrition: { calories: 717, carbs: 0.1, proteins: 0.8, totalFats: 81.1, saturatedFats: 51.4, fibers: 0, sodium: 11 } },
          {
            name: "Extrato de baunilha de verdade",
            qty: "5g",
            pct: 1.25
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          {
            name: "Raspas de 1 laranja Bahia e 1 limão siciliano",
            qty: "ou 5g essência"
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } }
        ]
      },
      {
        name: "Carga (Inclusões)",
        items: [
          {
            name: "Gotas de chocolate meio amargo ou frutas\n                          cristalizadas",
            qty: "250g",
            pct: 62.5
          , nutrition: { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 } }
        ]
      }
    ],
    method: [
      { text: <><strong>Esponja (Pré-fermento).</strong> Misture os 100g de
                    farinha, o fermento seco e o suco de laranja (ou água) até
                    homogeneizar. Cubra e deixe descansar em temperatura
                    ambiente por 30 a 45 minutos, até dobrar de volume e ficar
                    cheia de bolhas — sinal de que a esponja está ativa e
                    pronta.</> },
      { text: <><strong>Autólise e Mistura Inicial.</strong> Na tigela da
                    batedeira, combine a esponja, o restante da farinha (300g),
                    as gemas, o suco de laranja restante, o açúcar, o leite em
                    pó, o mel e os aromatizantes (baunilha e raspas cítricas).
                    Misture em velocidade baixa por 3 a 5 minutos até incorporar
                    toda a farinha. Deixe descansar por 15 minutos.</> },
      { text: <><strong>Desenvolvimento do Glúten.</strong> Adicione o sal e
                    ligue a batedeira em velocidade média. Bata por 8 a 10
                    minutos até a massa começar a desgrudar das laterais e
                    apresentar boa elasticidade. Por ser uma massa enriquecida,
                    o glúten se forma com mais lentidão — respeite o tempo de
                    sovagem.</> },
      { text: <><strong>Incorporação da Manteiga.</strong> Reduza para
                    velocidade baixa e adicione a manteiga em ponto pomada em 3
                    ou 4 adições, esperando a absorção completa de cada porção.
                    A massa pode parecer que desintegra nos primeiros momentos —
                    continue batendo. Após toda a manteiga absorvida, bata até a
                    massa voltar a ser completamente lisa e levemente brilhante.</> },
      { text: <><strong>Adição da Carga.</strong> Reduza para a velocidade
                    mínima e adicione as gotas de chocolate (ou frutas
                    cristalizadas). Misture por apenas 1 minuto para distribuir
                    uniformemente sem rasgar o glúten.</> },
      { text: <><strong>Primeira Fermentação e Fermentação a Frio.</strong>
                    Transfira a massa para um recipiente untado com manteiga.
                    Deixe descansar por 1h em temperatura ambiente e, em
                    seguida, leve à geladeira (fermentação a frio) a 4°C por 12 a 18
                    horas para desenvolver sabores complexos e estabilizar a
                    manteiga.</> },
      { text: <><strong>Divisão e Boleamento.</strong> Retire a massa fria
                    da geladeira, divida em duas porções de aproximadamente
                    500g. Boleie suavemente na bancada untada com manteiga e
                    deixe descansar por 20 minutos coberta.</> },
      { text: <><strong>Segunda Fermentação.</strong> Coloque a massa
                    boleada nas formas de panetone (formas de papel forneável).
                    Deixe fermentar em local fechado e úmido (como forno
                    desligado) por 2h a 3h, ou até que o topo da massa atinja a
                    borda da forma.</> },
      { text: <><strong>Corte e Assamento.</strong> Faça um corte em cruz
                    ("X") delicado no topo com uma lâmina afiada e coloque uma
                    colher de chá de manteiga no centro. Asse em forno
                    pré-aquecido a 170°C por 35 a 45 minutos (temperatura
                    interna de 90°C a 92°C).</> },
      { text: <><strong>Resfriamento de Cabeça para Baixo.</strong> Ao
                    retirar do forno, transpasse duas hastes de metal (ou
                    palitos de churrasco) na base do panetone e pendure-o de
                    cabeça para baixo por no mínimo 4 horas antes de embalar ou
                    servir. Isso evita que o topo colapse enquanto a estrutura
                    de glúten e manteiga se estabiliza.</> },
    ],
    notes: []
  },
  {
    id: "bolo-banana-bread-el-guapo",
    title: "Banana Bread El Guapo",
    chips: [{"label":"Beurre Noisette","accent":false},{"label":"Açúcar Mascavo","accent":true},{"label":"Textura Chewy","accent":false},{"label":"Iogurte Natural","accent":false}],
    meta: [{"label":"Rendimento","value":"1 forma inglesa grande (~1,2kg)"},{"label":"Preparo","value":"20 min + 50–60 min forno"}],
    nutritionConfig: { portionSize: 80, portionLabel: "fatia (80g)" },
    image: "images/el-guapo-img-12.webp",
    ingredients: [
      {
        name: "A. Base Úmida e Aromática (Líquidos)",
        items: [
          {
            name: "Bananas maduras prata/nanica",
            qty: "800g",
            pct: 160
          , nutrition: { calories: 98, carbs: 26, proteins: 1.3, totalFats: 0.1, saturatedFats: 0, fibers: 2, sodium: 0 } },
          {
            name: "Manteiga sem sal (para Beurre Noisette)",
            qty: "250g",
            pct: 50
          , nutrition: { calories: 717, carbs: 0.1, proteins: 0.8, totalFats: 81.1, saturatedFats: 51.4, fibers: 0, sodium: 11 } },
          {
            name: "Ovos integrais",
            qty: "6 un. (~330g)",
            pct: 66
          , nutrition: { calories: 143, carbs: 1.6, proteins: 13, totalFats: 8.9, saturatedFats: 2.7, fibers: 0, sodium: 168 } },
          {
            name: "Açúcar mascavo",
            qty: "350g",
            pct: 70
          , nutrition: { calories: 369, carbs: 94, proteins: 0.8, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 12 } },
          {
            name: "Melado de cana ou mel",
            qty: "50g",
            pct: 10
          , nutrition: { calories: 290, carbs: 75, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 15 } },
          {
            name: "Iogurte natural integral",
            qty: "100g",
            pct: 20
          , nutrition: { calories: 61, carbs: 4.7, proteins: 4.1, totalFats: 3, saturatedFats: 1.9, fibers: 0, sodium: 50 } },
          {
            name: "Extrato de baunilha de verdade",
            qty: "10g",
            pct: 2
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } }
        ]
      },
      {
        name: "B. Secos (Estrutura — 100% = 500g Farinha)",
        items: [
          {
            name: "Farinha de trigo Tipo 1",
            qty: "500g",
            pct: 100
          , nutrition: { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1, saturatedFats: 0.2, fibers: 2.7, sodium: 2 } },
          {
            name: "Aveia em flocos finos",
            qty: "100g",
            pct: 20
          , nutrition: { calories: 394, carbs: 66.6, proteins: 13.9, totalFats: 8.5, saturatedFats: 1.6, fibers: 9.1, sodium: 5 } },
          {
            name: "Canela em pó",
            qty: "5g",
            pct: 1
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          {
            name: "Sal refinado",
            qty: "5g",
            pct: 1
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 38758 } },
          {
            name: "Fermento químico em pó",
            qty: "15g",
            pct: 3
          , nutrition: { calories: 53, carbs: 24.3, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 14234 } },
          {
            name: "Bicarbonato de sódio",
            qty: "5g",
            pct: 1
          , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 27360 } }
        ]
      },
      {
        name: "C. Inclusões (Carga) e Topo",
        items: [
          {
            name: "Chocolate amargo (70%) picado ou em gotas",
            qty: "200g",
            pct: 40
          , nutrition: { calories: 536, carbs: 62.7, proteins: 5.2, totalFats: 29.8, saturatedFats: 18.2, fibers: 8.2, sodium: 15 } },
          {
            name: "Nozes ou pecãs tostadas e picadas",
            qty: "100g",
            pct: 20
          , nutrition: { calories: 654, carbs: 13.7, proteins: 15.2, totalFats: 65.2, saturatedFats: 6.1, fibers: 6.7, sodium: 2 } },
          {
            name: "Banana extra cortada ao meio (longitudinal)",
            qty: "1 un."
          , weightInGrams: 100, nutrition: { calories: 98, carbs: 26, proteins: 1.3, totalFats: 0.1, saturatedFats: 0, fibers: 2, sodium: 0 } },
          {
            name: "Açúcar cristal ou demerara",
            qty: "a gosto"
          , nutrition: { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 } }
        ]
      }
    ],
    method: [
      { text: <><strong>Manteiga Noisette (Avelã).</strong> Derreta a
                    manteiga em fogo médio. Deixe cozinhar mexendo de vez em
                    quando até que os sólidos do leite precipitem, fiquem
                    dourados/marrons no fundo e exalem um aroma amendoado de
                    avelã. Transfira imediatamente para uma tigela fria para
                    parar o cozimento e deixe amornar (não precisa solidificar,
                    use líquida mas não fervendo).</> },
      { text: <><strong>Mise en Place.</strong> Amasse as bananas
                    grosseiramente com um garfo, deixando alguns pedaços para
                    textura (ou processe se preferir uma massa lisa). Toste as
                    nozes no forno a 160°C por 5 a 8 minutos apenas para liberar
                    óleos essenciais. Pique grosseiramente após esfriar.</> },
      { text: <><strong>Mistura dos Líquidos.</strong> Em um bowl grande,
                    misture a manteiga noisette morna, o açúcar mascavo, o
                    melado, os ovos, o iogurte, a baunilha e as bananas
                    amassadas. Bata com um fouet apenas para homogeneizar em uma
                    emulsão grossa. Não bata em excesso.</> },
      { text: <><strong>Mistura dos Secos.</strong> Em outro recipiente,
                    peneire a farinha, o fermento químico, o bicarbonato, a
                    canela e o sal. Misture a aveia e as nozes picadas até
                    distribuir uniformemente.</> },
      { text: <><strong>Incorporação (Método Muffin).</strong> Verta os
                    líquidos sobre os secos (ou vice-versa, o que for mais
                    prático). Misture com uma espátula ou pão duro fazendo
                    movimentos de baixo para cima. Pare de misturar assim que a
                    farinha sumir. É normal e desejável que a massa tenha grumos
                    — se bater demais, o bolo ficará elástico e duro
                    (embatumado).</> },
      { text: <><strong>Carga Final.</strong> Adicione o chocolate amargo em
                    gotas/picado e dê apenas duas ou três voltas para distribuir
                    uniformemente sem desenvolver mais glúten.</> },
      { text: <><strong>Montagem e Decoração.</strong> Verta a massa em uma
                    forma de bolo inglês grande (ou duas médias) untada e
                    forrada com papel manteiga. Coloque as duas metades da
                    banana extra sobre o topo da massa, com o lado cortado
                    voltado para cima. Polvilhe açúcar demerara generosamente
                    por toda a superfície para criar uma crosta caramelizada.</> },
      { text: <><strong>Assamento.</strong> Asse em forno pré-aquecido a
                    170°C por 50 a 60 minutos. O bolo estará pronto quando um
                    palito inserido no centro sair limpo (exceto por chocolate
                    derretido) e a temperatura interna atingir 92°C. Deixe
                    esfriar por 15 minutos na forma antes de desenformar sobre
                    uma grelha.</> },
    ],
    notes: []
  },
  {
    id: "bolo-pao-de-mel",
    title: "Bolo Pão de Mel",
    chips: [
      { label: "Tradição e Sabor", accent: false },
      { label: "Massa de mel e especiarias", accent: true },
      { label: "Recheio de doce de leite", accent: false },
      { label: "Cobertura de chocolate", accent: false },
      { label: "Úmido, macio e perfumado", accent: false }
    ],
    meta: [
      { label: "Rendimento", value: "1 bolo estruturado" },
      { label: "Categoria", value: "Bolos" }
    ],
    nutritionConfig: { portionSize: 80, portionLabel: "fatia (80g)" },
    image: "images/bolo-pao-de-mel.jpg",
    ingredients: [
      {
        name: "Massa (Pão de Ló Especiarias)",
        items: [
          { name: "Ovos", qty: "4 un." , weightInGrams: 200, nutrition: { calories: 143, carbs: 1.6, proteins: 13, totalFats: 8.9, saturatedFats: 2.7, fibers: 0, sodium: 168 } },
          { name: "Açúcar", qty: "200g" , nutrition: { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 } },
          { name: "Farinha de trigo", qty: "140g" , nutrition: { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1, saturatedFats: 0.2, fibers: 2.7, sodium: 2 } },
          { name: "Mel", qty: "60g" , nutrition: { calories: 304, carbs: 82.4, proteins: 0.3, totalFats: 0, saturatedFats: 0, fibers: 0.2, sodium: 4 } },
          { name: "Óleo", qty: "65ml" , weightInGrams: 65, nutrition: { calories: 884, carbs: 0, proteins: 0, totalFats: 100, saturatedFats: 15, fibers: 0, sodium: 0 } },
          { name: "Água quente", qty: "60ml" , weightInGrams: 60, nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          { name: "Cacau em pó", qty: "10g" , nutrition: { calories: 228, carbs: 58, proteins: 20, totalFats: 14, saturatedFats: 8, fibers: 33, sodium: 21 } },
          { name: "Canela em pó", qty: "2 col. café" , weightInGrams: 10, nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          { name: "Cravo em pó", qty: "1 col. café" , weightInGrams: 5, nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          { name: "Gengibre em pó (ou noz moscada)", qty: "1 col. café" , weightInGrams: 5, nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          { name: "Fermento químico para bolos", qty: "1 col. sopa rasa" , weightInGrams: 15, nutrition: { calories: 53, carbs: 24.3, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 14234 } }
        ]
      },
      {
        name: "Calda de Infusão",
        items: [
          { name: "Água", qty: "240ml" , weightInGrams: 240, nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          { name: "Açúcar", qty: "90g" , nutrition: { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 } },
          { name: "Pau de canela", qty: "1 un." , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          { name: "Cravos-da-índia", qty: "5 un." , nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } }
        ]
      },
      {
        name: "Recheio e Cobertura",
        items: [
          { name: "Doce de leite firme (recheio)", qty: "400g" , nutrition: { calories: 315, carbs: 60.1, proteins: 6.3, totalFats: 5.5, saturatedFats: 3.1, fibers: 0, sodium: 122 } },
          { name: "Chocolate meio amargo (ganache)", qty: "300g" , nutrition: { calories: 536, carbs: 62.7, proteins: 5.2, totalFats: 29.8, saturatedFats: 18.2, fibers: 8.2, sodium: 15 } },
          { name: "Creme de leite (ganache)", qty: "120g" , nutrition: { calories: 536, carbs: 62.7, proteins: 5.2, totalFats: 29.8, saturatedFats: 18.2, fibers: 8.2, sodium: 15 } }
        ]
      }
    ],
    method: [
      { text: <><strong>Calda.</strong> Em uma panela, junte a água, o açúcar, a canela e os cravos. Leve ao fogo e deixe ferver até o açúcar dissolver por completo. Desligue, deixe esfriar e coe. Reserve.</> },
      { text: <><strong>Massa (Método Espumoso).</strong> Na batedeira, bata os ovos com o açúcar até obter um creme claro, fofo e volumoso (ponto de fita).</> },
      { text: <><strong>Emulsão dos Líquidos.</strong> À parte, dissolva o mel e o cacau na água quente. Incorpore o óleo a esta mistura.</> },
      { text: <><strong>Incorporação.</strong> Adicione a mistura de líquidos ao creme de ovos de forma delicada. Peneire a farinha, as especiarias e o fermento. Envolva os ingredientes secos na massa utilizando uma espátula, com movimentos suaves de baixo para cima, para não perder a aeração.</> },
      { text: <><strong>Cozimento.</strong> Despeje a massa em uma forma untada e leve ao forno preaquecido a 180 °C por aproximadamente 35 a 40 minutos (faça o teste do palito).</> },
      { text: <><strong>Ganache.</strong> Derreta o chocolate meio amargo (em banho-maria ou no micro-ondas em intervalos de 30 segundos). Incorpore o creme de leite e mexa vigorosamente até obter uma emulsão lisa e brilhante.</> },
      { text: <><strong>Montagem.</strong> Após o bolo esfriar, corte-o em camadas. Umedeça cada camada de massa de forma generosa com a calda de especiarias. Aplique uma camada uniforme do doce de leite firme. Cubra o bolo montado com a ganache de chocolate meio amargo.</> }
    ],
    notes: []
  },
  {
    id: "arroz-doce-toffee-amburana",
    title: "Arroz Doce Toffee Amburana",
    chips: [
      { label: "Sobremesa de Colher" },
      { label: "Caramelo Toffee", accent: true },
      { label: "Cachaça Amburana" },
      { label: "Servido Gelado" },
    ],
    meta: [
      { label: "Rendimento", value: "11–12 potes (220ml)" },
      { label: "Serviço", value: "Gelado" },
    ],
    nutritionConfig: { portionSize: 220, portionLabel: "pote (220ml)" },
    image: "images/arroz-doce-toffee-amburana.jpg",
    ingredients: [
      {
        name: "Fase 1 — O Cozimento (A Base)",
        items: [
          { name: "Arroz Agulhinha (não lavar)", qty: "350g", nutrition: { calories: 358, carbs: 78.1, proteins: 7.2, totalFats: 0.3, saturatedFats: 0.1, fibers: 1.6, sodium: 1 } },
          { name: "Água filtrada", qty: "1200ml", weightInGrams: 1200, nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          { name: "Canela em pau", qty: "2 un.", nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          { name: "Cravo-da-índia", qty: "5 un.", nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          { name: "Café solúvel", qty: "1 pitada", nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } },
          { name: "Sal refinado", qty: "4g", nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 38758 } }
        ]
      },
      {
        name: "Fase 2 — Base Toffee e Creme Lácteo",
        items: [
          { name: "Açúcar refinado", qty: "300g", nutrition: { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 } },
          { name: "Manteiga", qty: "40g", nutrition: { calories: 717, carbs: 0.1, proteins: 0.8, totalFats: 81.1, saturatedFats: 51.4, fibers: 0, sodium: 11 } },
          { name: "Leite integral (bem quente)", qty: "1000ml", weightInGrams: 1000, nutrition: { calories: 60, carbs: 4.7, proteins: 3.2, totalFats: 3.3, saturatedFats: 2.1, fibers: 0, sodium: 44 } },
          { name: "Leite condensado", qty: "395g", nutrition: { calories: 321, carbs: 57.3, proteins: 7.7, totalFats: 8.1, saturatedFats: 5, fibers: 0, sodium: 127 } },
          { name: "Creme de leite (caixinha)", qty: "200g", nutrition: { calories: 223, carbs: 4.5, proteins: 2.3, totalFats: 22, saturatedFats: 13, fibers: 0, sodium: 47 } },
          { name: "Cachaça envelhecida em Amburana", qty: "30ml", weightInGrams: 30, nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } }
        ]
      },
      {
        name: "Fase 3 — Finalização Aromática",
        items: [
          { name: "Canela em pó", qty: "Q.B.", nutrition: { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 } }
        ]
      }
    ],
    method: [
      { text: <><strong className="text-ink">O Amaciamento do Grão.</strong> Em uma panela grande, coloque a água, o arroz, a canela em pau, os cravos, o café solúvel e o sal. Ligue o fogo médio, com a panela semitampada, e cozinhe até a água quase secar por completo e o grão estar extremamente macio (passando do ponto de um arroz salgado tradicional). Desligue, retire os cravos e as canelas em pau, e reserve.</> },
      { text: <><strong className="text-ink">A Construção do Toffee.</strong> Enquanto o arroz cozinha, aqueça o litro de leite em outra leiteira. Em uma panela larga e de fundo grosso, coloque os 300g de açúcar em fogo médio-baixo. Derreta lentamente até atingir uma cor de caramelo âmbar profundo. Assim que atingir a cor desejada, incorpore os 40g de manteiga mexendo vigorosamente.</> },
      { text: <><strong className="text-ink">O Deglace.</strong> Com cuidado (o choque térmico subirá vapor), despeje um terço do leite quente sobre o caramelo amanteigado. Mexa sem parar até dissolver os pedaços de açúcar cristalizado. Adicione o restante do leite. Você acabou de criar a base líquida de Leite Toffee.</> },
      { text: <><strong className="text-ink">A Unificação e a Redução Visual.</strong> Despeje esse Leite Toffee quente diretamente na panela do arroz cozido e ligue em fogo baixo. Incorpore os 395g de leite condensado. Mexa constantemente, raspando o fundo, por 10 a 15 minutos. <em>Atenção ao Ponto:</em> Desligue o fogo quando a panela ainda apresentar a viscosidade de uma "sopa bem grossa" (quando a espátula nas costas da colher deixar um caminho limpo, mas ainda houver bastante líquido borbulhando). Não deixe secar.</> },
      { text: <><strong className="text-ink">A Finalização de Alta Gastronomia (Fora do Fogo).</strong> Imediatamente após desligar o fogo, incorpore o creme de leite e os 30ml de cachaça Amburana. O calor residual evapora o álcool agressivo, travando as notas amadeiradas da bebida, enquanto a gordura fria do creme de leite interrompe o cozimento.</> },
      { text: <><strong className="text-ink">O Porcionamento Seguro (Regra do Frio).</strong> Despeje o arroz doce ainda quente nos potinhos de 220ml. Deixe esfriar abertos na bancada por cerca de 1 hora até atingirem temperatura ambiente (isso evita a condensação de água na tampa). Faça uma chuva fina de canela em pó sobre a superfície de cada um, tampe hermeticamente e leve à geladeira a noite toda.</> }
    ],
    notes: [
      {
        title: "Por que não lavar o arroz?",
        content: "Manter o amido superficial do grão é essencial: é ele que confere a cremosidade natural ao arroz doce, dispensando amido de milho ou espessantes."
      },
      {
        title: "Cachaça Amburana",
        content: "A cachaça envelhecida em barris de amburana contribui com notas de baunilha, canela e cumarina. O álcool evapora com o calor residual, restando apenas o perfil aromático."
      },
      {
        title: "Ponto do Toffee",
        content: "O caramelo deve atingir um âmbar profundo (170–180 °C). Mais claro ficará sem sabor; mais escuro amargará. A adição da manteiga estabiliza o caramelo e evita cristalização."
      }
    ]
  }
];
