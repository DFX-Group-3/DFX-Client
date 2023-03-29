import React from 'react'
import useLogout from '../../../hooks/UseLogout'
import { useUserContext } from '../../../hooks/UseUserContext'

const Navbar = () => {
    const { logout } = useLogout()
    const {user} =  useUserContext()

    const handleClick = () => {
        logout()
    }

  return (
    <div>
          <nav>
              {user && (
                  <button onClick={handleClick}>Logout</button>
              )}
          </nav>
    </div>
  )
}

export default Navbar