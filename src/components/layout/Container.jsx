import React from 'react'

function Container({children , className}) {
  return (
    <div className={`max-w-352.5 mx-auto px-2.5 md:px-0 ${className}`}>{children}</div>
  )
}

export default Container