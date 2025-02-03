import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className='flex justify-center items-center gap-5 font-bold h-20' style={{color:"#3B8B13"}}>
        <div className="effect1">
            <Link to="/">Home</Link>
        </div>
        <div className="effect1">Recipes</div>
        <div className="effect1">
            <Link to="/favourite" >Favourite</Link>
        </div>
        {/* <div>Community Resources</div> */}
        {/* <div></div> */}
    </div>
  )
}

export default NavBar