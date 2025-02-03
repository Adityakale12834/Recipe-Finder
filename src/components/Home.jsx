import Filters from "./Filters"
import Footer from "./Footer"
import Hero from "./Hero"
import NavBar from "./NavBar"

function Home() {
  return (
    <div>
        <Hero/>
        <Filters/>
        <Footer/>
      </div>
  )
}

export default Home