'use client'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
export default function Scroll() {
  // when clicking a link, user will not scroll to the top of the page if the header is sticky.
  // their current scroll position will persist to the next page.
  // this useEffect is a workaround to 'fix' that behavior.

  const pathname = usePathname()
  useEffect(() => {
    window.scroll(0, 0)
  }, [pathname])
  return <></>
}
