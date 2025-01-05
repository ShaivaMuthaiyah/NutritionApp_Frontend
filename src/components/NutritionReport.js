import PieChart from "../components/PieChart";
import CalorieNeedsChart from "./CalorieNeedsChart";
import WaterNeedsChart from "./WaterNeedsChart";
import FiberNeedsChart from "./FiberNeedsChart";
import WeightChart from "./WeightChart";
import FatPercentageChart from "./FatPercentChart";
import React from 'react';
import config from "../services/appConfig";



export default function NutritionReport({ nutritionData }) {


    const { API_URL, BUCKET_URL } = config;
    const handleSubmit = async (e) => {
      e.preventDefault();

      // Get the report_id from nutritionData
      const reportId = nutritionData.report_id;

      

      // Send the request to the endpoint with the report_id in the URL
        try {
            // const response = await fetch(`${API_URL}/api/download_report/${reportId}`, {
              const response = await fetch(`${API_URL}/download_report/${reportId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',  // Not necessary for GET, but safe to include
                },
            });

            if (response.ok) {
                console.log('Report requested successfully');
                // Optionally handle the response (e.g., start downloading the report)

                 // Create a temporary <a> element for triggering the download
                const a = document.createElement('a');
                // a.href = `${API_URL}/api/download_report/${reportId}`;
                a.href = `${API_URL}/download_report/${reportId}`;
                a.download = `nutrition_report_${reportId}.pdf`;  // Optionally specify the filename for download
                a.style.display = 'none';  // Hide the element

                // Append the <a> element to the document body
                document.body.appendChild(a);

                // Programmatically click the <a> element to trigger the download
                a.click();

                // Clean up by removing the <a> element
                document.body.removeChild(a);

            } else {
                console.error('Error requesting report');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };


    return (
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-lime-700">Health Starts Here</h2>
          <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Your Nutrition Results
          </p>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              onClick={handleSubmit}
              className="middle none rounded-lg  bg-slate-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true">
              Download Report
            </button>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Macronutrients Breakdown
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    A breakup of different macronutrients calculated based on your inputs. 
                  </p>
                  {nutritionData ? (
                    <PieChart
                      protein={nutritionData.nutrients.caloric_needs.macronutrients.protein}
                      fat={nutritionData.nutrients.caloric_needs.macronutrients.fat}
                      carbs={nutritionData.nutrients.caloric_needs.macronutrients.carbs}
                    />
                  ) : (
                    <p>Loading...</p>
                  )}


                </div>
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Fibre Intake /Day</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Indicates the amount of fibre for gut health. Sources of fibre can include supplements
                  </p>
                </div>

                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  {nutritionData ? (

                    <FiberNeedsChart fiberIntake={nutritionData.nutrients.recommendations.fiber_intake} />
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Daily Caloric Requirements</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    The amount of calories in Kcal you need to consume to achieve your goal.
                  </p>

                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                    {nutritionData ? (
                      <CalorieNeedsChart caloricNeeds={nutritionData.nutrients.caloric_needs.goal_caloric_needs} />
                    ) : (
                      <p>Loading...</p>
                    )}

                  </div>

                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Recommended Water Intake</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Indication of how much water in Litres to drink. This amount may vary based on seasons and environmental conditions.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  {nutritionData ? (
                    <WaterNeedsChart waterIntake={nutritionData.nutrients.recommendations.water_intake} />

                  ) : (
                    <p>Loading...</p>
                  )}
                </div>

              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Body Metrics
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Displays where your weight in within the ideal range. However if you are a bodybuilder or above the age of 65 this range
                    may not be accurate.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">

                    {nutritionData ? (
                      <WeightChart idealWeight={nutritionData.nutrients.basic_metrics.ideal_body_weight} currentWeight={nutritionData.nutrients.basic_metrics.current_weight} />

                    ) : (
                      <p>Loading...</p>
                    )}

                  </div>
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Fat Percentage
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    This is a rough estimate of your body fat percentage and the range it should fall between. Though an accurate measure
                    requires the use of callipers. 
                  </p>
                  </div>

                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">

                            {nutritionData ? (
                              <FatPercentageChart FatPercentageRange={nutritionData.nutrients.basic_metrics.ideal_body_fat_percentage} FatPercentage={nutritionData.nutrients.basic_metrics.body_fat_percentage} />

                            ) : (
                              <p>Loading...</p>
                            )}

                        </div>
                </div>
                </div>
               

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
    )

}