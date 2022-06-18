import React from 'react'

function Card({children}) {
  return (
    <div className='p-4  border border-gray-200 rounded'>{children}</div>
  )
}

export default Card