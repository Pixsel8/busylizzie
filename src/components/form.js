import React, { useState } from "react"
import axios from "axios"
const ContactForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/{unique-endpoint-generated-on-step-1}",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  return (
    <div className="col-md-8 mt-5">
      <form action="#" className="lg:px-6" onSubmit={handleOnSubmit}>
        <div className="mx-auto w-full">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm leading-6 text-gray-900"
              >
                Your name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="block w-full bg-white border-b px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm leading-6 text-gray-900"
              >
                Your email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full bg-white border-b px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full bg-white border-b px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="transition ease-in-out hover:scale-105 hover:bg-pink-700 rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              send
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
