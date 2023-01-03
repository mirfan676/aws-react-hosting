import React from 'react'
import { NavLink, Link, useSearchParams } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs';
const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>
                Free Shipping Over $100 & Free Returns
              </p>

            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>
                Hotline:
                <a className='text-white'
                href='tel:+923066762289'>
                  +92 306 676 2289
                </a>
              </p>

            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <h1>
                <Link className='text-white'>Saeed&Sons</Link>
              </h1>
            </div>
            <div className='col-5'>
            <div class="input-group mb-3">
              <input type="text" className='form-control'
              placeholder="Search Products Here"
              aria-label="Search Products Here"
              aria-describedby="basic-addon2"/>
              <span className='input-group-text'
              id="basic-addon2"><BsSearch/></span>
            </div>

            </div>
            <div className='col-4'>

            </div>
          </div>
        </div>
      </header>


    </>
  )
}

export default Header