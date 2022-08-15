import React from 'react'
import Footer from '../modules/footer/Footer'
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
      <Footer />
    </div>
  )
}


export default Default;