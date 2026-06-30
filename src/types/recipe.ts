import React from "react";

export interface NutritionalInfo {
  calories: number;      // kcal por 100g
  carbs: number;         // g por 100g
  proteins: number;      // g por 100g
  totalFats: number;     // g por 100g
  saturatedFats: number; // g por 100g
  fibers: number;        // g por 100g
  sodium: number;        // mg por 100g
}

export interface Ingredient {
  name: string;
  qty: string;
  pct?: number; // Baker's percentage
  weightInGrams?: number; // Opcional: para ingredientes sem 'g' explícito no qty
  nutrition?: NutritionalInfo;
}

export interface IngredientGroup {
  name: string;
  items: Ingredient[];
}

export interface RecipeStep {
  text: React.ReactNode;
}

export interface RecipeNote {
  title: string;
  content: React.ReactNode;
}

export interface RecipeNutritionConfig {
  portionSize: number; // Gramatura da porção (ex: 80 para 80g)
  portionLabel?: string; // Nome da porção (ex: "fatia", "unidade")
}

export interface RecipeProps {
  id: string;
  title: string;
  chips: { label: string; accent?: boolean }[];
  meta: { label: string; value: string }[];
  image: string;
  ingredients: IngredientGroup[];
  method: RecipeStep[];
  notes?: RecipeNote[];
  nutritionConfig?: RecipeNutritionConfig;
}
