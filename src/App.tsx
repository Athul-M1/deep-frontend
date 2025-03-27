import Navbar from "./Body/Navbar"
import Hero from "./Body/Hero"
import MenuItems from "./Body/MenuItems"
import Contact from "./Body/Contact"

const App = () => {
  return (
    <div className="bg-primary">
      <Navbar/>
      <Hero/>
      <MenuItems/>
      <Contact/>
    </div>
  )
}

export default App