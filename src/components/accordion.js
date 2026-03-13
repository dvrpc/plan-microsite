import React from "react"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import { PlusIcon } from "@heroicons/react/20/solid"

const Accordion = ({ label, children, color, size }) => {
  return (
    <div className="w-full">
      <Disclosure as="div">
        <DisclosureButton className="group flex w-full items-center gap-2 font-bold">
          <span
            className="text-xl text-left"
            style={{
              color: color ? color : "#063446",
              fontSize: size ? size : "1.25rem ",
            }}
          >
            {label}
          </span>
          <PlusIcon
            className="size-4 open:rotate-180"
            style={{ color: color ? color : "#063446" }}
          />
        </DisclosureButton>
        <DisclosurePanel className="mt-2 flex flex-col gap-y-6">
          {children}
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}

export default Accordion
