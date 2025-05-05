import { useEffect, useState } from "react";
import { Recipe } from "@/types";
import Calculator from "@/logic/Calculator";

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
      const m = amount.split("x");
      const molde2 = Calculator.ractangleArea(Number(m[0]), Number(m[1]));
      const molde1 = Calculator.circleArea(Number(recipe.amount));
      const result = molde2 / molde1;
      const totalresult = recipe.ingredients.map((ingrediente) =>
        Calculator.calTotal(
          Number(ingrediente.amount),
          Number(ingrediente.ingredient.cost),
          result
        )
      );
      setCost(String(totalresult.reduce((a, b) => a + b)));
    }

    if (recipe.unit === "Molde Rectangular" && unit === "Molde Circular") {
      const m1 = recipe.amount.split("x");
      const molde1 = Calculator.ractangleArea(Number(m1[0]), Number(m1[1]));
      const molde2 = Calculator.circleArea(Number(amount));
      const result = molde2 / molde1;
      const totalresult = recipe.ingredients.map((ingrediente) =>
        Calculator.calTotal(
          Number(ingrediente.amount),
          Number(ingrediente.ingredient.cost),
          result
        )
      );
      setCost(String(totalresult.reduce((a, b) => a + b)));
    }

    if (recipe.unit === unit) {
      if (unit === "Unidad") {
        const result = Number(recipe.cost) / Number(amount);
        setCost(String(result));
      }
      if (unit === "Molde Circular") {
        const molde1 = Calculator.circleArea(Number(recipe.amount));
        const molde2 = Calculator.circleArea(Number(amount));
        const result = molde2 / molde1;
        const totalresult = recipe.ingredients.map((ingrediente) =>
          Calculator.calTotal(
            Number(ingrediente.amount),
            Number(ingrediente.ingredient.cost),
            result
          )
        );
        setCost(String(totalresult.reduce((a, b) => a + b)));
      }
      if (unit === "Molde Rectangular") {
        const m1 = recipe.amount.split("x");
        const m2 = amount.split("x");
        const molde1 = Calculator.ractangleArea(Number(m1[0]), Number(m1[1]));
        const molde2 = Calculator.ractangleArea(Number(m2[0]), Number(m2[1]));
        const result = molde2 / molde1;
        const totalresult = recipe.ingredients.map((ingrediente) =>
          Calculator.calTotal(
            Number(ingrediente.amount),
            Number(ingrediente.ingredient.cost),
            result
          )
        );
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
      {isNaN(Number(cost)) ? cost : Number(cost).toFixed(2)} Dolares -
      {isNaN(Number(cost)) ? cost : " " + (Number(cost) * 4000).toFixed(0)}{" "}
      Pesos
    </div>
  );
};

export default CalcRecipe;
