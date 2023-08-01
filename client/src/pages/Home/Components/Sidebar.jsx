import { menus } from "../../../config/constants"
import { createElement, useEffect, useState } from "react"
import { HiMenuAlt3 } from "react-icons/hi"
import { Link } from "react-router-dom"


const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState('')

  useEffect(() => {
    const storedView = localStorage.getItem('selectedView')
    if (storedView) {
      setView(JSON.parse(storedView))
    } else {
      setView(menus[0])
    }
  }, [])

  const handleMenuClick = (menu) => {
    setView(menu)
    localStorage.setItem('selectedView', JSON.stringify(menu))
  }


  return (
    <section className="flex gap-6 h-[90vh]">
      <div
        className={` bg-pallete-lightgrey dark:bg-pallete-grey min-h-screen ${open ? " w-56" : " w-16"
          } duration-500 text-pallete-grey dark:text-pallete-white`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer mx-5"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu, i) => (
            <Link
              onClick={() => handleMenuClick(menu)}
              menu={menu}
              to={menu.link}
              key={menu.name}
              className={` 
              ${menu?.margin && "mt-1"} group flex items-center text-sm gap-3 p-2 mx-3.5 rounded-md transition-colors duration-300
              ${view.link === menu.link ? 'bg-pallete-white hover:bg-pallete-white dark:bg-pallete-lightgrey dark:hover:bg-pallete-lightgrey rounded-r-none mr-0 shadow-xl' : 'bg-inherit hover:bg-pallete-white dark:hover:bg-pallete-lightgrey hover:text-pallete-black'}
              `}
            >
              <div>{createElement(menu?.icon, { size: "19" })}</div>
              <h2
                className={`whitespace-pre font-PoppinsRegular ${!open && "opacity-0 translate-x-5 overflow-hidden"
                  } duration-75 ease-in`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${open && "hidden"
                  } absolute left-48 bg-pallete-white text-pallete-black font-PoppinsMedium whitespace-pre rounded-md drop-shadow-lg p-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-20 group-hover:transition-all group-hover:w-fit z-50  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )


}



export default Sidebar