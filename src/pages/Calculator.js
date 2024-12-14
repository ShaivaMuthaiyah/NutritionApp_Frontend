
import NutritionForm from "../components/NutritionForm";
import NutritionReport from '../components/NutritionReport';
import NutritionDashboard from "../components/NutritionDashboard";
import { useState } from 'react';



export default function Calculator() {

    const [nutritionData, setNutritionData] = useState(null);

    return (
        <div>
            <NutritionForm setNutritionData={setNutritionData} />
            {nutritionData && <NutritionReport nutritionData={nutritionData} />}
            {nutritionData && <NutritionDashboard data={nutritionData} />}
        </div>
    )
  }
  