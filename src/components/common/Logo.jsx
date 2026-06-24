import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <Image src="/images/logo.png" alt="logo" width={111} height={27}  className="w-auto h-auto"/>
  )
}

export default Logo