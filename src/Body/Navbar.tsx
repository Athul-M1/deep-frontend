import { Menu, X } from "lucide-react"
import { useState } from "react"
import logo from "/assets/logo.png"

const Navbar = () => {
  const navLinks = [
    { href: "#home", label: "HOME" },
    { href: "#menu", label: "MENU" },
    { href: "#reservation", label: "MAKE A RESERVATION" },
    { href: "#contact-us", label: "CONTACT US" },
  ]

  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <header className="relative z-50 w-full bg-primary">
      <nav className="w-full bg-primary py-4 px-6 flex justify-between items-end z-50">
        <a href="/">
          <img src={logo} alt="logo" width={40} height={29} />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex flex-1 justify-center gap-10 items-baseline">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-oswald text-lg text-white transition-colors duration-300 hover:text-blue-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-white font-oswald">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed top-16 left-0 w-full bg-primary py-5 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Mobile Menu Links */}
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg text-white transition-colors duration-300 hover:text-blue-500"
                onClick={() => setMenuOpen(false)} // Close menu when a link is clicked
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
