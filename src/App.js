import React from 'react'

import Cart from 'components/Cart'
import Users from 'components/Users'

export default () => {
  console.log('rendered once')

  return (
    <div className="container">
      <Users />
      <Cart />
    </div>
  )
}
