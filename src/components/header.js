import React, { Fragment, useState } from "react"
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const company = [
  { name: "Companionship", href: "/companionship" },
  { name: "Home help", href: "/home-help" },
  { name: "Transportation", href: "/transportation" },
  { name: "Nutrition", href: "/nutrition" },
  { name: "Social enrichment", href: "/social-enrichment" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between pt-6 px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Busy Lizzie Home Care</span>
            <StaticImage
              src="../images/busylizzie-logo.png"
              alt="Busy Lizzie logo"
              className="w-32 lg:w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm leading-6 text-gray-900">
            Home
          </Link>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm leading-6 text-gray-900">
              Services
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                {company.map(item => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block rounded-lg px-3 py-2 text-sm leading-6 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link to="/about" className="text-sm leading-6 text-gray-900">
            About
          </Link>
          <Link to="/blog" className="text-sm  leading-6 text-gray-900">
            Local events
          </Link>
          <Link to="/contact" className="text-sm  leading-6 text-gray-900">
            Contact
          </Link>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Busy Lizzie Home Care</span>
              <StaticImage
                src="../images/busylizzie-logo.png"
                alt="Busy Lizzie logo"
                className="w-32 lg:w-auto"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm  leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-sm  leading-7 text-gray-900 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {company.map(item => (
                          <Disclosure.Button
                            key={item.name}
                            as={Link} // Use the Gatsby Link component
                            to={item.href} // Change href to to
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm  leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  to="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm  leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Local events
                </Link>
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-sm  leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
