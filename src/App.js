import React from 'react'

import Cart from 'components/Cart'
import Users from 'components/Users'

export default () => {
  console.log('abc')

  return (
    <div className="container">
      <Users />
      <Cart />
    </div>
  )
}
