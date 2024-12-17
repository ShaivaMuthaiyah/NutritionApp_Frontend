
import { useState } from 'react';

const API_URL = "http://localhost";

export default function NutritionForm({ setNutritionData }) {

    const [formData, setFormData] = useState({
        age: '',
        weight: '',
        height: '',
        gender: 'male',
        allergies: [],
        diet: 'omnivore',
        activitylevel: 'sedentary',
        goal: "maintain_weight",
      });

      const allergyOptions = ["Fish", "Shellfish", "Pork", "Chicken", "Beef", "None"];

    // Handle input changes to update form data
    const handleChange = (e) => {
        const { name, value } = e.target;
    
        // Handle diet-specific logic for allergies
        if (name === 'diet') {
          let updatedAllergies = [];
          if (value === 'pescatarian') {
            updatedAllergies = formData.allergies.filter((allergy) =>
              ["Fish", "Shellfish", "None"].includes(allergy)
            );
          } else if (value !== 'omnivore') {
            updatedAllergies = ['None']; // Default to "None" for vegetarian or vegan
          }
    
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            allergies: updatedAllergies,
          }));
        } else {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
      };

    const handleAllergyChange = (e) => {
        const { value, checked } = e.target;

        if (value === "None") {
            // If "None" is checked, clear all allergies
            setFormData((prevData) => ({
                ...prevData,
                allergies: checked ? ["None"] : [],
            }));
        } else {
            // If any other allergy is checked
            setFormData((prevData) => ({
                ...prevData,
                allergies: checked
                    ? [...prevData.allergies.filter(allergy => allergy !== "None"), value]
                    : prevData.allergies.filter((allergy) => allergy !== value),
            }));
        }
    };

    const isAllergyDisabled = (allergy) => {
        if (formData.diet === 'omnivore') return false; // All options available
        if (formData.diet === 'pescatarian') {
          return !["Fish", "Shellfish", "None"].includes(allergy); // Allow only specific options
        }
        return true; // Disable all for vegetarian and vegan
      };


     // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();


        // For troubleshooting
        const data = {
            age: formData.age,
            weight: formData.weight,
            gender: formData.gender,
            diet: formData.diet,
            allergies: formData.allergies,
            height: formData.height,
            activitylevel: formData.activitylevel,
            goal: formData.goal,
          };
          // Alert the data object for troubleshooting
        alert(JSON.stringify(data, null, 2));

    
    // Send the form data to the endpoint
    try {
        const response = await fetch(`${API_URL}/calculate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Data submitted successfully');
          const data = await response.json();

          alert(JSON.stringify(data, null, 2));
          setNutritionData(data);
          
        } else {
          console.error('Error submitting data');
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    };

    

    return (
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Nutrition Calculator</h2>
            <p className="mt-2 text-lg leading-8 text-lime-700">
              Enter your details here to receive a customised meal plan.
            </p>
          </div>
                <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-2">
                        <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">
                            Age
                        </label>
                        <div className="mt-2">
                            <input
                            id="age"
                            name="age"
                            type="number"
                            min="16"
                            max="100"
                            required
                            value={formData.age}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-700 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label htmlFor="weight" className="block text-sm font-medium leading-6 text-gray-900">
                            Weight (kg)
                        </label>
                        <div className="mt-2">
                            <input
                            id="weight"
                            name="weight"
                            type="number"
                            min="40"
                            max="200"
                            value={formData.weight}
                            required
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-700 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                            Gender
                        </label>
                        <div className="mt-2">
                            <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            required
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-lime-700 sm:text-sm sm:leading-6"
                            >
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='female'>Other</option>
                            </select>
                        </div>
                        </div>




                        <div className="sm:col-span-2">
                        <label htmlFor="diet" className="block text-sm font-medium leading-6 text-gray-900">
                            Diet Preference
                        </label>
                        <div className="mt-2">
                            <select
                            id="diet"
                            name="diet"
                            value={formData.diet}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-lime-700 sm:text-sm sm:leading-6"
                            >
                            <option value='omnivore'>Omnivore (You eat most meat)</option>
                            <option value='vegetarian'>Vegetarian (No meat at all)</option>
                            <option value='vegan'>Vegan (No animal products)</option>
                            <option value='pescatarian'>Pescatarian (You eat fish but not meat)</option>
                            </select>
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label htmlFor="allergies" className="block text-sm font-medium text-gray-900">
                        Allergies
                        </label>
                        <div className="mt-2 grid grid-cols-2 gap-4">
                        {allergyOptions.map((allergy) => (
                            <div key={allergy} className="flex items-center">
                            <input
                                id={allergy}
                                type="checkbox"
                                value={allergy}
                                checked={formData.allergies.includes(allergy)}
                                onChange={handleAllergyChange}
                                disabled={isAllergyDisabled(allergy)}
                                className="h-4 w-4 text-lime-700 border-gray-300 focus:ring-lime-500"
                            />
                            <label
                                htmlFor={allergy}
                                className={`ml-2 block text-sm ${
                                isAllergyDisabled(allergy) ? 'text-gray-400' : 'text-gray-900'
                                }`}
                            >
                                {allergy}
                            </label>
                            </div>
                        ))}
                        </div>
                    </div>

                        
                        <div className="sm:col-span-2">
                        <label htmlFor="height" className="block text-sm font-medium leading-6 text-gray-900">
                            Height (cm)
                        </label>
                        <div className="mt-2">
                            <input
                            id="height"
                            name="height"
                            type="number"
                            required
                            value={formData.height}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-700 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label htmlFor="activitylevel" className="block text-sm font-medium leading-6 text-gray-900">
                            Activity Level
                        </label>
                        <div className="mt-2">
                            <select
                            id="activitylevel"
                            name="activitylevel"
                            required
                            value={formData.activitylevel}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-lime-700 sm:text-sm sm:leading-6"
                            >
                            <option value="sedentary">Sedentary</option>
                            <option value="lightly_active">Lightly Active</option>
                            <option value="moderately_active">Moderately Active</option>
                            <option value="very_active">Very Active</option>
                            <option value="extra_active">Extra Active</option>
                            </select>
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label htmlFor="goal" className="block text-sm font-medium leading-6 text-gray-900">
                            Health Goal
                        </label>
                        <div className="mt-2">
                            <select
                            id="goal"
                            name="goal"
                            value={formData.goal}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-lime-700 sm:text-sm sm:leading-6"
                            >
                            <option value="weight_loss">Weight Loss</option>
                            <option value="weight_gain">Weight Gain</option>
                            <option value="maintain_weight">Maintain Weight</option>
                            <option value="muscle_building">Increase Muscle Mass</option>
                            </select>
                        </div>
                        </div>


                    </div>
                    </div>
                </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                        type="submit"
                        className="middle none rounded-lg bg-slate-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-slate-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true">
                        Submit
                        </button>
                        </div>
                </form>
          </div>
    </div>
  );
}
