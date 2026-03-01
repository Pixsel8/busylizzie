import React, { useEffect, useMemo, useRef, useState } from "react"

const FORM_ID = "gyqub78u7u8"
const SDK_SRC = "https://forminit.com/sdk/v1/forminit.js"

function loadForminitSdk() {
  return new Promise((resolve, reject) => {
    // If already loaded, resolve immediately
    if (typeof window !== "undefined" && window.Forminit) return resolve(true)

    // If script tag already exists but not ready yet, wait for it
    const existing = document.querySelector(`script[src="${SDK_SRC}"]`)
    if (existing) {
      existing.addEventListener("load", () => resolve(true))
      existing.addEventListener("error", reject)
      return
    }

    const script = document.createElement("script")
    script.src = SDK_SRC
    script.async = true
    script.onload = () => resolve(true)
    script.onerror = reject
    document.body.appendChild(script)
  })
}

const ContactForm = () => {
  const formRef = useRef(null)

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null, // { ok: boolean, msg: string }
  })

  // We memoize a Forminit instance once the SDK is available
  const forminitRef = useRef(null)

  useEffect(() => {
    let mounted = true

    ;(async () => {
      try {
        await loadForminitSdk()
        if (!mounted) return
        // Create the SDK client once
        forminitRef.current = new window.Forminit()
      } catch (e) {
        if (!mounted) return
        setServerState({
          submitting: false,
          status: { ok: false, msg: "Failed to load form SDK. Please try again." },
        })
      }
    })()

    return () => {
      mounted = false
    }
  }, [])

  const handleOnSubmit = async e => {
    e.preventDefault()
    const form = e.target

    setServerState({ submitting: true, status: null })

    try {
      // Ensure SDK is loaded (in case user submits very quickly)
      if (!forminitRef.current) {
        await loadForminitSdk()
        forminitRef.current = new window.Forminit()
      }

      const formData = new FormData(form)

      // Forminit submit (FormData approach)
      const { data, redirectUrl, error } = await forminitRef.current.submit(
        FORM_ID,
        formData
      )

      if (error) {
        setServerState({
          submitting: false,
          status: { ok: false, msg: error.message || "Submission failed." },
        })
        return
      }

      setServerState({
        submitting: false,
        status: { ok: true, msg: "Thanks!" },
      })
      form.reset()
    } catch (err) {
      setServerState({
        submitting: false,
        status: {
          ok: false,
          msg:
            err?.message ||
            "Something went wrong while submitting. Please try again.",
        },
      })
    }
  }

  return (
    <div className="col-md-8 mt-5">
      <form
        ref={formRef}
        action="#"
        className="lg:px-6"
        onSubmit={handleOnSubmit}
      >
        <div className="mx-auto w-full">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6">
            {/* Your name (single input like old form) */}
            {/* Forminit prefers first+last, but you asked "looks the same",
                so we keep one input and map it to fi-sender-fullName */}
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
                  name="fi-sender-fullName"
                  id="name"
                  autoComplete="given-name"
                  className="block w-full bg-white border-b px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            {/* Your email */}
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
                  name="fi-sender-email"
                  id="email"
                  autoComplete="email"
                  className="block w-full bg-white border-b px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="fi-text-message"
                  id="message"
                  rows={4}
                  className="block w-full bg-white border-b px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  required
                />
              </div>
            </div>
          </div>

          {/* Result message (kept minimal so styling stays the same) */}
          {serverState.status?.msg ? (
            <p
              className={`mt-4 text-sm ${
                serverState.status.ok ? "text-green-700" : "text-red-700"
              }`}
              aria-live="polite"
            >
              {serverState.status.msg}
            </p>
          ) : null}

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              disabled={serverState.submitting}
              className="transition ease-in-out hover:scale-105 hover:bg-pink-700 rounded-3xl w-3/5 md:w-48 bg-gray-900 px-3.5 py-2.5 text-center text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {serverState.submitting ? "sending..." : "send"}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
