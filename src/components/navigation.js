import * as React from "react"
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react"
import { Link } from "gatsby"

const Dropdown = ({ label, children }) => {
  return (
    <Menu>
      <MenuButton className="inline-flex">{label}</MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="flex flex-col text-[#093447] font-[Roboto] underline text-xl bg-[#dfebf5] w-48 divide-y gap-2 p-2 mt-2 transition duration-100 ease-out z-50"
      >
        {children}
      </MenuItems>
    </Menu>
  )
}

const Navigation = () => {
  return (
    <div className="bg-[#dfebf5]">
      <div className="w-[80%] grid grid-cols-6 justify-items-center text-xl text-center text-[#093447] font-[Roboto] underline mx-auto py-2 whitespace-nowrap">
        <Link to="/what-is-the-plan">About</Link>
        <Dropdown label="Trends & Forces">
          <MenuItem>
            <Link to="/trends">Trends</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/forces">Forces</Link>
          </MenuItem>
        </Dropdown>
        <Link to="/vision">Vision</Link>
        <Link>Projects</Link>
        <Link>Take Action</Link>
        <Link>Documents & Resources</Link>
      </div>
    </div>
  )
}

export default Navigation
