import { FC, useState, useEffect } from 'react'
import throttle from 'lodash.throttle'
import cn from 'classnames'
import s from './Navbar.module.css'

const NavbarRoot: FC = ({ children }) => {

  return (
    <div style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)', }} className={cn(s.root)}>
      {children}
    </div>
  )
}

export default NavbarRoot
