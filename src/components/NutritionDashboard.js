import { useState } from "react";

export default function NutritionDashboard({ data }) {
  const [selectedMeals, setSelectedMeals] = useState({
    breakfast: data.meals.breakfast[0],
    lunch: data.meals.lunch[0],
    dinner: data.meals.dinner[0],
    snacks: data.meals.snacks[0],
  });

  const handleDropdownChange = (mealType, index) => {
    setSelectedMeals((prev) => ({
      ...prev,
      [mealType]: data.meals[mealType][index],
    }));
  };

  const calculateCumulativeNutrients = () => {
    const mealValues = Object.values(selectedMeals);
    return mealValues.reduce(
      (acc, meal) => {
        acc.Calories += meal.Calories || 0;
        acc.ProteinContent += meal.ProteinContent || 0;
        acc.FiberContent += meal.FiberContent || 0;
        acc.SugarContent += Math.round(meal.SugarContent) || 0;
        acc.CarbohydrateContent += meal.CarbohydrateContent || 0;
        acc.SodiumContent += meal.SodiumContent || 0;
        return acc;
      },
      { Calories: 0, ProteinContent: 0, FiberContent: 0, SodiumContent: 0,  CarbohydrateContent: 0 , SugarContent: 0}
    );
  };

  const nutrients = calculateCumulativeNutrients();

  return (
    <div className="p-8 bg-gray-100 sm:py-32">
    <div class="mx-auto max-w-2xl lg:text-center">

      <h2 class="text-base/7 font-semibold text-lime-700">Meals</h2>
      <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight  text-slate-800 sm:text-5xl lg:text-balance">Your Meal Recommmendations</p>
        <div class="mt-6 border-t border-gray-300 pt-4">
      <p class="text-sm text-gray-500">
        <strong>Ingredient Measurements:</strong> Spices and condiments are measured in <em>teaspoons</em>, liquids in <em>cups</em>, and other items in <em>grams</em> or <em>units</em>.
      </p>
    </div>
    </div>

      <div className="mt-10 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
        {Object.keys(selectedMeals).map((mealType, idx) => (
          <div key={idx} className="bg-slate-50 shadow-lg rounded-lg p-4 ">
            <h2 className="text-xl font-semibold capitalize mb-2  text-slate-900">
              {mealType}
            </h2>
            <p className="text-sm mb-2 ">
              {selectedMeals[mealType].Description}
            </p>

            <div className="text-sm mb-4">
              <strong>Servings:</strong> {selectedMeals[mealType].RecipeServings}
            </div>
     
            <ul className="text-sm mb-4 ">
            <strong>Ingredients:</strong>
              {Array.isArray(selectedMeals[mealType].RecipeIngredientParts)
                ? selectedMeals[mealType].RecipeIngredientParts.map(
                    (ingredient, i) => (
                      <li key={i}>
                        &bull; {ingredient} :{" "}
                        {selectedMeals[mealType].RecipeIngredientQuantities[i] ||
                          "NA"}
                      </li>
                    )
                  )
                : <li>NA</li>}
            </ul>
            <p className="text-sm mb-4 ">
              <strong>Preparation Steps:</strong>{" "}
              {Array.isArray(selectedMeals[mealType].RecipeInstructions) ? (
                <ol className="list-decimal ml-6">
                  {selectedMeals[mealType].RecipeInstructions.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              ) : (
                "NA"
              )}
            </p>
            <hr className="border-gray-300 mb-4" />
            <div className="text-sm">
              <strong>Calories:</strong> {selectedMeals[mealType].Calories} kcal
            </div>
            <div className="text-sm">
              <strong>Protein:</strong>{" "}
              {selectedMeals[mealType].ProteinContent} g
            </div>
            <div className="text-sm">
              <strong>Fat:</strong>{" "}
              {selectedMeals[mealType].FatContent} g
            </div>
            <div className="text-sm">
              <strong>Carbs:</strong>{" "}
              {selectedMeals[mealType].CarbohydrateContent} g
            </div>
            <div className="text-sm">
              <strong>Fiber:</strong> {selectedMeals[mealType].FiberContent} g
            </div>
              <div className="text-sm">
              <strong>Sugar:</strong> {selectedMeals[mealType].SugarContent} g
            </div>
            <select
              className="w-full mt-4 border border-gray-300 rounded px-2 py-1"
              onChange={(e) => handleDropdownChange(mealType, e.target.value)}
            >
              {data.meals[mealType].map((meal, index) => (
                <option key={index} value={index}>
                  {meal.Name}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
        
      <div className="bg-white shadow-lg rounded-lg p-4 mt-10">
        <h2 className="text-xl font-semibold mb-4">Nutritional Summary</h2>
        <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-slate-700 text-slate-50">
            <tr>
              <th className="border px-4 py-2 text-left">Nutrient</th>
              <th className="border px-4 py-2 text-center">Recommended Daily Allowance (RDA)</th>
              <th className="border px-4 py-2 text-center">Amount from Suggestions</th>
              <th className="border px-4 py-2 text-center">RDA % Satisfied</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Calories (in kcal)</td>
              <td className="border px-4 py-2 text-center ">
                {data.nutrients.caloric_needs.goal_caloric_needs}
              </td>
              <td className="border px-4 py-2 text-center  bg-slate-50 ">
                {Math.round(nutrients.Calories)} 
              </td>
              <td className="border px-4 py-2 text-center">
                {Math.round((nutrients.Calories/data.nutrients.caloric_needs.goal_caloric_needs) * 100)}
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Protein (in g)</td>
              <td className="border px-4 py-2 text-center">
                {data.nutrients.caloric_needs.macronutrients.protein}
              </td>
              <td className="border px-4 py-2 text-center  bg-slate-50">
                {Math.round(nutrients.ProteinContent)}
              </td>
              <td className="border px-4 py-2 text-center">
                {Math.round((nutrients.ProteinContent/data.nutrients.caloric_needs.macronutrients.protein) * 100)}
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Fiber (in g)</td>
              <td className="border px-4 py-2 text-center">{data.nutrients.recommendations.fiber_intake}</td>
              <td className="border px-4 py-2 text-center  bg-slate-50">
                {Math.round(nutrients.FiberContent)} 
              </td>
              <td className="border px-4 py-2 text-center">
                {Math.round((nutrients.FiberContent/data.nutrients.recommendations.fiber_intake)* 100)}
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Carbohydrate (in g)</td>
              <td className="border px-4 py-2 text-center">{data.nutrients.caloric_needs.macronutrients.carbs}</td>
              <td className="border px-4 py-2 text-center  bg-slate-50">
                {Math.round(nutrients.CarbohydrateContent)} 
              </td>
              <td className="border px-4 py-2 text-center">
                {Math.round((nutrients.CarbohydrateContent/data.nutrients.caloric_needs.macronutrients.carbs) * 100)}
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Sodium (in mg)</td>
              <td className="border px-4 py-2 text-center">2000</td>
              <td className="border px-4 py-2 text-center  bg-slate-50">
                {Math.round(nutrients.SodiumContent)}
              </td>
              <td className="border px-4 py-2 text-center">
                {Math.round((nutrients.SodiumContent/2000) * 100)}
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-2">Sugar (in g)</td>
              <td className="border px-4 py-2 text-center">{data.nutrients.recommendations.sugar_intake}</td>
              <td className="border px-4 py-2 text-center  bg-slate-50">
                {nutrients.SugarContent}
              </td>
              <td className="border px-4 py-2 text-center">
                {(Math.round((nutrients.SugarContent)/(data.nutrients.recommendations.sugar_intake))* 100) }
              </td>
            </tr>
            
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
