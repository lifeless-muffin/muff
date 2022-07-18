import React from 'react'
import Header from '../modules/header/Header'

type Props = {
  children: React.ReactNode
}

const Default = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className="default-layout">
        {children}
      </div>
    </div>
  )
}


export default Default;