import {React, useState} from 'react'
import { navLinks, hamburger } from '../../constants';
import {Link} from 'react-router-dom';

const Nav = ({ showLoginHandler, showRegisterHandler }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toogleNavbar = () => {
      setIsOpen(!isOpen);
    };
    return (
      <header className="py-4 font-sans px-8 sm:px-16 z-10 w-full bg text-black ">
        <nav className="flex justify-between items-center max-container font-Montserrat">
          <a href="/" className='font-Lilita text-4xl font-bold text-[#588B8B]'>
            {/* <img src={logo} width={60} alt="logo" /> */}
            Cravoo
          </a>
          <ul className="flex-1 flex justify-center items-center gap-14 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="text-lg leading-normal hover:text-r-btn"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center text-lg items-center gap-12 max-lg:hidden text-[#C8553D]">
            <Link to='/login'><span className="cursor-pointer">
                  Login
                </span></Link>
                <Link to='/register'><span className="cursor-pointer bg-r-dbtn text-r-nrml px-5 py-1 rounded-full">
                  Register
                </span></Link>
          </div>
          <div className="lg:hidden">
            <button onClick={toogleNavbar}>
              {isOpen ? <p className='text-lg font-semibold'>X</p> : <img src={hamburger} width="19" alt="menu" />}
            </button>
          </div>
        </nav>
        <div className='flex justify-end'>
          {isOpen &&
          <div className="lg:hidden list-none px-4 py-2  bg-[#fce4d9] rounded-lg absolute">
            {navLinks.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="text-lg font-medium text-slate-600leading-normal hover:text-r-logo w-full"
                >
                  {item.title}
                </a>
              </li>
            ))}
          <div className="flex flex-col mt-2 text-lg font-medium"> 
          <Link to='/login'><span className="cursor-pointer hover:text-r-dbtn">
                  Login
                </span></Link>
                <Link to='/register'><span className="cursor-pointer hover:text-r-dbtn">
                  Register
                </span></Link>
          </div>
          </div>}
        </div>
      </header>
    );
}

export default Nav