import React from 'react'
import Header from '../modules/header/Header.layout'

type Props = {
  children: React.ReactNode
}

const Default = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className="layout-children">
        lkjadsflkajslkfdjlksdflkajslk
        {children}
      </div>
    </div>
  )
}


export default Default;