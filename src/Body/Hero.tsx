import heroimg from "/assets/heroimg.png"

const Hero = () => {
  return (
    <section id="home" className="relative w-full">
      <div className="relative">
        <img src={heroimg} alt="main background image" className="w-full h-[231px] md:h-[311px]"  />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 ">
          <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-oswald font-bold mb-4 ">
            MENU
          </h1>
          <p className="text-secondary text-lg md:text-xl lg:text-2xl font-kelly p-4 rounded-lg ">
            Please take a look at our menu featuring food, drinks, and brunch. If you&aposd 
            like to place an order, use the "Order Online" button located below the menu.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
