import React from 'react'

interface Props {
    children: React.ReactNode
}

function ViewSpecsText({children}: Props) {
  return (
    <div className='view_text'>{children}</div>
  )
}

export default ViewSpecsText