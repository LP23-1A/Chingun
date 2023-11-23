import React from 'react'

function Nav({children}) {
  return (
    <header className='flex justify-center items-center gap-6 float-right'>{children}</header> 
  )
}
export default Nav