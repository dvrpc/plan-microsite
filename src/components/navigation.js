import * as React from "react"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { Link } from "gatsby"

const Dropdown = ({ label, children }) => {
  return (
    <Menu>
      <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-700 data-open:bg-gray-700">
        {label}
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="w-52 origin-top-right rounded-xl border bg-transparent p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none"
      >
        {children}
      </MenuItems>
    </Menu>
  )
}

const Navigation = () => {
  return (
    <div className="bg-[#dfebf5]">
      <div className="w-[80%] grid grid-cols-6 justify-items-center text-xl text-center text-[#093447] font-[Roboto] underline mx-auto py-2">
        <Link>About</Link>
        <Link>Trends & Forces</Link>
        <Link>Vision</Link>
        <Link>Projects</Link>
        <Link>Take Action</Link>
        <Link>Documents & Resources</Link>
      </div>
    </div>
  )
}

export default Navigation
