import React from 'react'
import Header from '../modules/header/Header'

type Props = {
  children: React.ReactNode
}

const Default = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className="layout-children text-[80px]">
        lkjadsflkajslkfdjlksdflkajslk
        {children}
      </div>
    </div>
  )
}


export default Default;