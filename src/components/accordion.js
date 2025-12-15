import React from "react"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import { PlusIcon } from "@heroicons/react/20/solid"

const Accordion = ({ label, children, color }) => {
  return (
    <div className="w-full">
      <Disclosure as="div">
        <DisclosureButton className="group flex w-full items-center gap-2 font-bold">
          <span style={{ color: color && color }}>{label}</span>
          <PlusIcon className="size-4 open:rotate-180" />
        </DisclosureButton>
        <DisclosurePanel className="mt-2 flex flex-col gap-6">
          {children}
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}

export default Accordion
