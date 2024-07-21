import {React, useState} from 'react'
import { navLinks, hamburger } from '../constants';
import Nav from './LandingPage/Nav';
import Restaurants from './LandingPage/Restaurants';

const LandingPage = ({ showLoginHandler, showRegisterHandler }) => {

  return (
    <div className='w-full'>
      <Nav showLoginHandler={showLoginHandler} showRegisterHandler={showRegisterHandler}/>
      <Restaurants/>
    </div>
  );
  };

export default LandingPage