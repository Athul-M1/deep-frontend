import patternbg from "/assets/patternbg.png"
import left from "/assets/left.png"
import right from "/assets/right.png"
import menubg from "/assets/menubg.png"

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { DollarSign } from "lucide-react"
import { useEffect, useState } from "react"
import api from "@/services/baseurl"

const MenuItems = () => {

  interface data {
    _id: number;
    name: string;
    items: details[];
  }

  interface details {
    _id: number;
    name: string;
    price: number;
    description: string;
  }

  const [data, setData] = useState<data[]>([])
  const [details, setDetails] = useState<details[]>([])

  const getMenu = async () => {
    try {
      const response = await api.get<{ menus: data[] }>("/get-all-menu")
      console.log("API Response:", response.data)
      setData(response.data.menus)
      const extractedItems = response.data.menus.flatMap(menu => menu.items)
      setDetails(extractedItems)
    } catch (err) {
      console.error("Failed to fetch data:", err)
    }
  }

  useEffect(() => {
    getMenu()
  }, [])

  return (
    <section className="relative w-full" id="menu">
      {/* Pattern Background Section */}
      <div className="relative">
        <img
          src={patternbg}
          alt="Pattern Background"
          className="w-full h-[80px] object-cover"
        />
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 flex gap-4">
          {data?.map((item) => (
            <Button variant="custombtn" key={item.name}>{item.name}</Button>
          ))}
        </div>
      </div>

      {/* Main Background Section */}
      <div
        className="relative w-full h-[535px] md:h-[672px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${menubg})` }}
      >
        {/* Left Image - Half visible */}
        <img
          src={left}
          alt="Left Side"
          className="absolute left-0 top-80 -translate-y-1/2 w-[150px] h-[670px] object-fit opacity-80 hidden md:block"
        />
        {/* Right Image - Half visible */}
        <img
          src={right}
          alt="Right Side"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[150px] h-[670px] object-fit opacity-80 hidden md:block"
        />

        <div className="absolute w-full md:w-[70%] top-[-20] border-secondary border-2 h-96">
          <div className="w-full h-28 flex justify-center items-center gap-4">
            <div className="border-3 w-16 border-secondary" />
            <h1 className="uppercase font-extrabold text-2xl md:text-4xl text-white font-oswald tracking-wider">
              brunch details
            </h1>
            <div className="border-3 w-16 border-secondary" />
          </div>
        </div>

        <div className="w-[70%] px-6 py-4 absolute mt-30 md:mt-0">
          <Accordion type="single" collapsible={true}>
            {details?.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="flex justify-between text-white text-2xl font-semibold ">
                  <span className="w-full font-oswald">{item.name}</span>
                  <span className="w-40 flex items-center gap-1  font-oswald">
                    <DollarSign size={18} className="relative top-[1px]" />
                    {item.price}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-secondary  font-kelly text-lg">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default MenuItems