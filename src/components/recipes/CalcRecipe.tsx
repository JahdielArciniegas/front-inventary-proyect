import { useEffect, useState } from "react";
import { Recipe } from "@/types";

const CalcRecipe = ({
  recipe,
  unit,
  amount,
}: {
  recipe: Recipe;
  unit: string;
  amount: string;
}) => {
  const [cost, setCost] = useState("0");

  useEffect(() => {
    if (recipe.unit === "Unidad" && unit !== "Unidad") {
      setCost("La muestra en unidades solo puede ser calculada en unidades");
    }

    if (unit === "Unidad" && recipe.unit !== "Unidad") {
      setCost("La muestra en unidades solo puede ser calculada en unidades");
    }

    if (recipe.unit === "Molde Circular" && unit === "Molde Rectangular") {
      const m2 = amount.split("x");
      const molde2 = Number(m2[0]) * Number(m2[1]) * 5;
      const molde1 = Math.pow(Number(recipe.amount) / 2, 2) * Math.PI * 5;
      const result = molde2 / molde1;
      const totalresult = recipe.ingredients.map((ingrediente) => {
        const amountTotal = Number(ingrediente.amount) * result;
        return Number(ingrediente.ingredient.cost) * amountTotal;
      });
      setCost(String(totalresult.reduce((a, b) => a + b)));
    }

    if (recipe.unit === "Molde Rectangular" && unit === "Molde Circular") {
      const m1 = recipe.amount.split("x");
      const molde1 = Number(m1[0]) * Number(m1[1]) * 5;
      const molde2 = Math.pow(Number(amount) / 2, 2) * Math.PI * 5;
      const result = molde2 / molde1;
      const totalresult = recipe.ingredients.map((ingrediente) => {
        const amountTotal = Number(ingrediente.amount) * result;
        return Number(ingrediente.ingredient.cost) * amountTotal;
      });
      setCost(String(totalresult.reduce((a, b) => a + b)));
    }

    if (recipe.unit === unit) {
      if (unit === "Unidad") {
        const result = Number(recipe.cost) / Number(amount);
        setCost(String(result));
      }
      if (unit === "Molde Circular") {
        const molde1 = Math.pow(Number(recipe.amount) / 2, 2) * Math.PI * 5;
        const molde2 = Math.pow(Number(amount) / 2, 2) * Math.PI * 5;
        const result = molde2 / molde1;
        const totalresult = recipe.ingredients.map((ingrediente) => {
          const amountTotal = Number(ingrediente.amount) * result;
          return Number(ingrediente.ingredient.cost) * amountTotal;
        });
        setCost(String(totalresult.reduce((a, b) => a + b)));
      }
      if (unit === "Molde Rectangular") {
        const m1 = recipe.amount.split("x");
        const m2 = amount.split("x");
        const molde1 = Number(m1[0]) * Number(m1[1]) * 5;
        const molde2 = Number(m2[0]) * Number(m2[1]) * 5;
        const result = molde2 / molde1;
        const totalresult = recipe.ingredients.map((ingrediente) => {
          const amountTotal = Number(ingrediente.amount) * result;
          return Number(ingrediente.ingredient.cost) * amountTotal;
        });
        setCost(String(totalresult.reduce((a, b) => a + b)));
      }
    }
  }, [unit, amount, recipe]);

  if (unit === "Molde Rectangular" && !amount.includes("x")) {
    return <div>Por favor, ingresa la cantidad en el formato 1x1</div>;
  }

  if (unit === "Molde Circular" && amount.includes("x")) {
    return <div>Por favor, ingresa el diametro del molde</div>;
  }
  return (
    <div>
      {Number(cost).toFixed(2)} - {(Number(cost) * 4000).toFixed(2)}
    </div>
  );
};

export default CalcRecipe;
