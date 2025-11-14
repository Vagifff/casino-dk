"use client"

export function getGclid(): string {
  if (typeof window === "undefined") return ""

  const urlParams = new URLSearchParams(window.location.search)
  const gclidFromUrl = urlParams.get("gclid")

  if (gclidFromUrl) {
    sessionStorage.setItem("gclid", gclidFromUrl)
    return gclidFromUrl
  }

  return sessionStorage.getItem("gclid") || ""
}
