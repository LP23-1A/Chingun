import React from 'react'

function Header({ children }) {
  return (
    <div className='flex px-80 py-16 justify-between items-center self stretch'>{children}</div>
  )
}
export default Header