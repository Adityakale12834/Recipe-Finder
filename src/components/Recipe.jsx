import NavBar from './NavBar'
import Hero from './Hero'
import { useParams } from "react-router"
import { useEffect, useState } from 'react';

function Recipe() {
    let params = useParams();
    console.log(params)
    const [recipe, setRecipe] = useState([]);
    async function getData() {
        await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?includeNutrition=false&apiKey=1a95ef22be8e4212b66f76c9dddb5d41`)
            .then(async (data) => await data.json())
            .then((data) => {
                setRecipe(data)
                console.log(data);
            });
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <Hero />
            <div className='flex justify-center my-4 antialiased tracking-tight'>
                <div className='flex flex-col w-full md:max-w-3xl p-4 indent-8 hyphens-auto rounded-sm shadow-2xl inset-shadow-sm border border-gray-400 m-4'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-5 font-bold'>
                            <img className='max-w-sm rounded' src={recipe.image} alt="" />
                            <div className='flex'>
                                <h1 className='text-3xl'>{recipe.title}</h1>
                                <h1>{recipe.cookingMinutes} Minutes</h1>
                                <h1>{recipe.servings} Servings</h1>
                            </div>
                        </div>
                        <h1 className=''>{recipe.instructions}</h1>
                    </div>
                    <div className="flex flex-col tex-md indent-8">
                        <h1 className='font-bold'>Steps to Make {recipe?.title}</h1>
                        {recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0 ? (
                            recipe.analyzedInstructions.map((instruction, index) => (
                                <div key={index} className='list-inside list-disc truncate overflow-hidden'>
                                    {/* <h2>Step {index + 1}</h2> */}
                                    {instruction.steps && instruction.steps.length > 0 ? (
                                        instruction.steps.map((step) => (
                                            <li className='flex normal-case' key={step.number}>
                                                <ul className='flex gap-2'>
                                                    <p className='font-semibold'>Step: {step.number}</p>
                                                    <p>{step.step}</p>
                                                </ul>
                                            </li>
                                        ))
                                    ) : (
                                        <p>No steps are found</p>
                                    )}
                                </div>
                            ))
                        ) : (
                            <p>No instructions found</p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Recipe