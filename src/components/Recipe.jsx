import NavBar from './NavBar'
import Hero from './Hero'
import { useParams } from "react-router"
import { useEffect, useState } from 'react';

function Recipe() {
    let params = useParams();
    console.log(params)
    const [recipe, setRecipe] = useState([]);
    async function getData() {
        await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?includeNutrition=false&apiKey=3201bc5a392343d6ac18d63fe1033452`)
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
                <div className='flex flex-col w-full md:max-w-5xl p-4 indent-8 hyphens-auto rounded-sm shadow-2xl inset-shadow-sm border border-gray-400 m-4'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-5 font-bold'>
                            <img className='max-w-sm rounded overflow-hidden' src={recipe.image} alt="" />
                            <div className=''>
                                <h1 className='text-3xl'>{recipe.title}</h1>
                                <h1>{recipe.servings} Servings</h1>
                                <h1 className='font-normal text-wrap'>{recipe.instructions}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col tex-md indent-8 my-5">
                        <h1 className='font-bold text-2xl'>Steps to Make {recipe?.title}</h1>
                        {recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0 ? (
                            recipe.analyzedInstructions.map((instruction, index) => (
                                <div key={index} className='list-inside list-disc overflow-hidden my-5'>
                                    {/* <h2>Step {index + 1}</h2> */}
                                    {instruction.steps && instruction.steps.length > 0 ? (
                                        instruction.steps.map((step) => (
                                            // console.log("steps:"+step)
                                            <li className='flex normal-case border border-gray-400 rounded my-5 py-5 hover:shadow-2xl' key={step.number}>
                                                <ul className=''>
                                                    <p className='font-semibold'>Step: {step.number}</p>
                                                    <div>
                                                        <p className='font-bold'>Equipments</p>
                                                        {step.equipment && step.equipment.length > 0 ? (step.equipment.map((equipment) => (
                                                            <div key={equipment.id}>
                                                                <img className='overflow-hidden' src={equipment.image} alt="" />
                                                                <p className=''>{equipment.name}</p>
                                                            </div>
                                                        ))) : (<p>Nothing found</p>)}
                                                    </div>
                                                    <div>
                                                        <p className='font-bold'>Ingredients</p>
                                                        {step.ingredients && step.ingredients.length > 0 ? (step.ingredients.map((ingredient) => (
                                                            <div key={ingredient.id}>
                                                                <img className='overflow-hidden' src={ingredient.image} alt="" />
                                                                <p className=''>{ingredient.name}</p>
                                                                { }
                                                            </div>
                                                        ))) : (<p>Nothing found</p>)}
                                                    </div>
                                                    <div>
                                                        <h1 className='font-bold'>Instructions</h1>
                                                        <div>
                                                        <p className='text-wrap'>{step.step}</p>
                                                        </div>
                                                    </div>
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