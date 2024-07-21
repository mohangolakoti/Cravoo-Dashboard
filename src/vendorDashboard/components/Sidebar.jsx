import React from 'react'
import { home, products, add, user, logout, firm } from '../constants'

const Sidebar = ({showDashboardHandler,showFirmHandler, showProductHandler, showAllProductsHandler, logOutHandler, showFirmTitle}) => {
  return (

    <div className="bg-[#003D58] flex md:flex-col flex-row justify-between">
        <ul className="flex md:flex-col flex-row text-nowrap px-5 md:py-8 cursor-pointer">
          <li className="w-full md:py-2 py-6 text-white text-lg font-medium rounded-lg md:hover:ring-1 md:hover:ring-[#D1495B] md:px-[9px] md:my-2">
            <img src={home} onClick={showDashboardHandler} alt="add" />
          </li>
          {showFirmTitle ? <li className="w-full md:py-2 text-white text-lg font-medium rounded-lg md:hover:ring-1 md:hover:ring-[#D1495B] md:pl-3 pl-5 my-7">
            <img src={firm} onClick={showFirmHandler} alt="add" />
          </li>:<p className='text-[#003D58]'>.</p>}
          <li className="w-full md:py-2 text-white text-lg font-medium rounded-lg md:hover:ring-1 md:hover:ring-[#D1495B] md:pl-3 pl-5 md:my-0 my-7">
            <img src={add} onClick={showProductHandler} alt="add" />
          </li>
          <li className="w-full md:py-2 text-white text-lg font-medium rounded-lg md:hover:ring-1 md:hover:ring-[#D1495B] md:px-2 pl-5 my-7">
            <img src={products} onClick={showAllProductsHandler} className="w-[42px]" alt="add" />
          </li>
        </ul>
        <ul className="flex md:flex-col flex-row text-nowrap p-5 cursor-pointer">
          <li className="w-full py-2 text-white text-lg font-medium rounded-lg md:hover:ring-1 md:hover:ring-[#D1495B] md:pl-3">
            <img src={user} alt="add" />
          </li>
          <li className="w-full py-3 md:py-2 text-white text-lg font-medium rounded-lg md:hover:ring-1 md:hover:ring-[#D1495B] px-2 md:my-7">
            <img onClick={logOutHandler} src={logout} alt="add" />
          </li>
        </ul>
      </div>

      /* <section className='border border-gray-300 max-w-fit h-[91vh] bg-slate-200'>
        <ul className='m-5 leading-10 text-lg font-medium flex flex-col whitespace-nowrap'>
            <li className='hover:text-orange-400 p-2 cursor-pointer' onClick={showFirmHandler}>Add Firm</li>
            <li className='hover:text-orange-400 p-2 cursor-pointer' onClick={showProductHandler}>Add Product</li>
            <li className='hover:text-orange-400 p-2 cursor-pointer' onClick={showAllProductsHandler}>All Products</li>
            <li className='hover:text-orange-400 p-2 cursor-pointer'>User Details</li>
        </ul>
    </section> */
  )
}

export default Sidebar