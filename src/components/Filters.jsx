import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Filters() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [submit, setSubmit] = useState(false);

    async function fetchData() {
        await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=3201bc5a392343d6ac18d63fe1033452`)
            .then(async (response) => await response.json())
            .then(data => {
                setData(data.results);
                console.log(data.results);
            });
    }

    function handleclick(items) {
        const val = localStorage.getItem("favourite");
        if (val === null) {
            const favourite = [items];
            localStorage.setItem("favourite", JSON.stringify(favourite));
        } else {
            const favourite = JSON.parse(val);
            favourite.push(items);
            localStorage.setItem("favourite", JSON.stringify(favourite));
        }
    }

    function handleNavigate(id){
        // console.log(id);
        navigate(`/recipe/${id}`, { state: "Aditya" });
    }

    function handleSubmit() {
        setSubmit(true);
        fetchData();
        setSearch("");

    }

    // useEffect(() => {
    // }, [submit]);
    return (
        <div>
            <div className='flex flex-col items-center my-10'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-5 text-center px-20'>
                        <h1 className='text-5xl font-bold' style={{ color: "#3B8B13" }}>Recipe Finder</h1>
                        <h1 className='text-xl text-gray-700'>Use filters to find meals and snacks that fit your preferences.</h1>
                    </div>
                    <div className='flex p-4 border rounded mx-4'>
                        <input className='h-10 mx-2 w-full focus:outline-0' type="text" placeholder='search for recipes by ingredient' value={search} onChange={(event) => setSearch(event.target.value)} />
                        <img className='cursor-pointer' src="/search.svg" alt="" onClick={handleSubmit} />
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-5 flex-wrap justify-center'>
                <div className='flex flex-wrap md:grid md:grid-cols-3 gap-10 max-w-5xl text-black  p-5'>
                    {Array.isArray(data) && data.length > 0 ? (
                        data.map((item, index) => (
                            <div className=" flex flex-col justify-between border hover:shadow-2xl cursor-pointer object-cover w-full" key={item.id || index} onClick={() => handleNavigate(item.id)}>
                                <div>
                                    <img className="overflow-hidden object-cover w-full h-fit" src={item.image} alt={item.title} />
                                    <img className='overflow-hidden w-10' onClick={() => handleclick(item)} src="/beforefavorite.png" alt="" />
                                </div>
                                <div className='m-2'>
                                    <div>
                                        <h1 className="text-lg font-semibold">{item.title}</h1>
                                    </div>
                                    <div>
                                        <p className="text-gray-600">{item.restaurantChain}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Filters