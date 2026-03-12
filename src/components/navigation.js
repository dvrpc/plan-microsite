import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Menu, Transition, Disclosure } from "@headlessui/react"

export default function Navigation() {
  const navigation = [
    { title: "About", path: "/what-is-the-plan" },
    {
      title: "Trends & Forces",
      path: "",
      children: [
        { title: "Trends", path: "/trends" },
        { title: "Forces", path: "/forces" },
      ],
    },
    {
      title: "Financial",
      path: "",
      children: [
        { title: "Financial", path: "/financial" },
        { title: "Funding Gap", path: "/funding-gap" },
        { title: "MRP Web Map", path: "/mrp-webmap" },
        { title: "MRP List", path: "/mrp-list" },
      ],
    },
    {
      title: "Vision",
      path: "/vision",
      children: [
        { title: "Vision", path: "/vision" },
        { title: "Plan Elements", path: "/plan-elements" },
        { title: "Strategies", path: "/strategies" },
      ],
    },
    { title: "Projects", path: "/mrp-list" },
    { title: "Take Action", path: "/taking-action" },
    {
      title: "Documents & Resources",
      path: "/resources",
    },
  ]

  return (
    <>
      <div className="w-full">
        <nav className="relative flex flex-wrap items-center justify-between mx-auto lg:justify-between bg-[#dfebf5]">
          {/* Logo  */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto sm:hidden p-2">
                  <Disclosure.Button aria-label="Toggle Menu">
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className="flex flex-col w-full lg:hidden">
                    <>
                      <NavMenu navigation={navigation} mobile={true} />
                    </>
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>

          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center mx-auto">
            <ul className="items-center pt-6 lg:pt-0 list-reset lg:flex lg:text-xl">
              <NavMenu navigation={navigation} />
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

const NavMenu = props => {
  return (
    <>
      {props.navigation.map((item, index) => {
        return (
          <div key={index} className="underline">
            {item.children && item.children.length > 0 ? (
              <DropdownMenu
                menu={item}
                items={item.children}
                mobile={props.mobile}
              />
            ) : (
              <MenuItem item={item} mobile={props.mobile} />
            )}
          </div>
        )
      })}
    </>
  )
}

const MenuItem = ({ item, mobile }) => {
  return (
    <Link to={item.path}>
      <a
        className={`underline ${
          mobile ? "w-full block px-4 py-2 -ml-4" : "inline-block px-6 py-2"
        }`}
      >
        {item.title}
      </a>
    </Link>
  )
}

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center gap-x-1 transition-all rounded-md outline-none focus:outline-none 
             ${mobile ? "px-4 py-2 -ml-4" : "inline-block px-4"}`}
          >
            <span>{menu.title}</span>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95"
          >
            <Menu.Items className="z-[100] lg:w-56 origin-top-left rounded-md lg:absolute lg:right-0 focus:outline-none bg-[#dfebf5] text-left">
              <div className={`${!mobile ? "py-3" : ""}`}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={index}>
                    {({ active }) => (
                      <Link to={item.path}>
                        <a className="flex space-x-2 lg:space-x-4 items-center px-5 py-2">
                          <span> {item.title}</span>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
