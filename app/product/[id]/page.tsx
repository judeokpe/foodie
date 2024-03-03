'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

function page() {
    const param = useSearchParams()
  return (
    <div>
     single page
    </div>
  )
}

export default page
