import React from 'react'
import Topbar from './topbar'
import CoinTable from './cointable'


const Coinlist = () => {
  return (
    <div className="coinlist">
        <Topbar />
        <CoinTable />
    </div>
  )
}

export default Coinlist