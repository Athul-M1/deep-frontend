import Navbar from "./Body/Navbar"
import Hero from "./Body/Hero"
import MenuItems from "./Body/MenuItems"

const App = () => {
  return (
    <div className="bg-primary">
      <Navbar/>
      <Hero/>
      <MenuItems/>
    </div>
  )
}

export default App