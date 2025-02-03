import { useEffect, useState } from "react"
import Hero from "./Hero"
import NavBar from "./NavBar"

function Favourites() {
    const [favourite, setFavourite] = useState([]);

    function fetchData() {
        const data = localStorage.getItem("favourite");
        // console.log(data);
        if (data) {
            setFavourite(JSON.parse(data));
            console.log(JSON.parse(data));
        }
    }
    function handleclick(data) {

    }

    useEffect(() => {
        fetchData();
    }, []);

    // throw new Error("Test error in Favourites component!");

    return (
        <div>
            {/* <NavBar /> */}
            <Hero />
            <div className='flex flex-col items-center my-10'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-5 text-center px-20'>
                        <h1 className='text-5xl font-bold' style={{ color: "#3B8B13" }}>Favourites</h1>
                        <h1 className='text-xl text-gray-700'>Use filters to find meals and snacks that fit your preferences.</h1>
                    </div>
                    {/* <div className='flex p-4 border rounded mx-4'>
                        <input className='h-10 mx-2 w-full focus:outline-0' type="text" placeholder='search for recipes by ingredient' value={search} onChange={(event) => setSearch(event.target.value)} />
                        <img src="/search.svg" alt="" onClick={handleSubmit} />
                    </div> */}
                </div>
            </div>
            <div className='flex flex-row gap-5 flex-wrap justify-center'>
                <div className="flex flex-wrap md:grid md:grid-cols-3 gap-10 max-w-5xl text-black p-5">
                    {
                        Array.isArray(favourite) && favourite.length > 0 ? (
                            favourite.map((item, index) => {
                               return ( <div className=" flex flex-col justify-between border hover:shadow-2xl w-full" key={item.id || index}>
                                    <div>
                                        <img className="overflow-hidden w-full h-fit" src={item.image} alt={item.title} />
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
                            )})
                        ) : (
                            <div className="text-center text-2xl text-gray-600">No Favourite</div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Favourites