import React from "react";
import { RecipeProps } from "../components/RecipeCard";

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
    image: "/images/el-guapo-img-01.webp",
    ingredients: [
      {
        name: "Base (100% = 500g farinha)",
        items: [
          { name: "Farinha W300+ ou Tipo 1 Forte", qty: "500g", pct: 100 },
          { name: "Água", qty: "325g", pct: 65 },
          { name: "Fermento biológico fresco", qty: "5g", pct: 1 },
          { name: "Mel ou açúcar", qty: "10g", pct: 2 },
          { name: "Sal refinado", qty: "12g", pct: 2.4 },
          { name: "Azeite de oliva", qty: "20g", pct: 4 },
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
    image: "/images/el-guapo-img-02.webp",
    ingredients: [
      {
        name: "Tangzhong",
        items: [
          { name: "Farinha de trigo", qty: "50g" },
          { name: "Leite integral", qty: "250g" },
        ],
      },
      {
        name: "Massa Final (100% = 600g farinha)",
        items: [
          { name: "Farinha de trigo média/forte", qty: "550g", pct: 100 },
          { name: "Leite integral gelado", qty: "260g", pct: 85 },
          { name: "Tangzhong preparado", qty: "todo", pct: undefined },
          { name: "Gemas", qty: "3 un.", pct: 9 },
          { name: "Açúcar refinado", qty: "42g", pct: 7 },
          { name: "Manteiga sem sal", qty: "70g", pct: 11.6 },
          { name: "Azeite de oliva", qty: "40g", pct: 6.6 },
          { name: "Sal refinado", qty: "12g", pct: 2 },
          { name: "Fermento biológico seco", qty: "2g", pct: 0.3 },
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
  }
];
