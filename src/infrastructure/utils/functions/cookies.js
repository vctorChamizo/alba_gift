import nookies from "nookies"

export const getSessioncookie = () => nookies.get(undefined, "cuimo_cookie")

export const setSessioncookie = (token) =>
  nookies.set(undefined, "cuimo_cookie", token, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/"
  })

export const destroySessionCookie = () =>
  nookies.destroy(undefined, "cuimo_cookie", { path: "/" })

export const setRefreshCookie = (token) =>
  nookies.set(undefined, "cuimo_rt", token, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/"
  })

export const destroyRefreshCookie = () =>
  nookies.destroy(undefined, "cuimo_rt", { path: "/" })

export const setAcceptCookie = (value) =>
  nookies.set(undefined, "cuimo_accepted_cookies", value, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/"
  })
