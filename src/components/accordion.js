import React, { useState } from "react"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid"

const Accordion = ({ label, children, color, size }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="w-full">
      <Disclosure open={isOpen} as="div">
        <DisclosureButton
          className="group flex w-full items-center gap-2 font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className="text-xl text-left"
            style={{
              color: color ? color : "#063446",
              fontSize: size ? size : "1.25rem ",
            }}
          >
            {label}
          </span>
          {!isOpen ? (
            <PlusIcon
              className="size-4"
              style={{ color: color ? color : "#063446" }}
            />
          ) : (
            <MinusIcon
              className="size-4"
              style={{ color: color ? color : "#063446" }}
            />
          )}
        </DisclosureButton>
        <DisclosurePanel className="mt-2 flex flex-col gap-y-4">
          {children}
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}

export default Accordion
