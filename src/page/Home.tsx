import React from 'react';
import { Button } from "antd";
import '../Css/Home.css';
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from "react";
import { getByTestId } from '@testing-library/react';

// function myFunction() {
//   const x = document.getElementById('creates');
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
  const isIpad = useMediaQuery({ query: '(min-width: 760px) and (max-width: 1248px)' });
  const isLargeDesktop = useMediaQuery({ query: '(min-width: 1920px)' });


 

  return (
    <div>
      <div className='F Go'>
        <div className='body1'>
          <div>
            <Link to="/">
              <div className="logoh">

              </div>
            </Link>
            <ul style={{ marginBottom: '0', fontSize: isIpad ? '10px' : isLargeDesktop ? '18px' : '14px' }}>
              <li><a href="/Hotels">Hotels</a></li>
              <li><a href="/Coupons">Coupons</a></li>
              <li><a href="/Activity">Activity</a></li>

              <div><li className='create' id='V' style={{ float: 'right', textAlign: 'center', visibility: 'visible' }}><a className="active">Create-Account</a></li></div>
              <li className='sign' id='C' style={{ float: 'right' }}><a className="active2" href="/Login">Sign-in</a></li>
            </ul>

          </div>
        </div>
        <div className='bg2'>
          <div className='HEAD'>
            <h2 style={{ fontSize: isIpad ? '28px' : isLargeDesktop ? '44px' : '36px' }}>Enjoy Life</h2>

          </div>
        </div>

        <div className='bg3'>
          <div className='search' style={{ marginBottom: '2%' }}>
            <h1 style={{ marginBottom: '0', fontSize: isIpad ? '24px' : isLargeDesktop ? '40px' : '32px' }}>Hotels, Resorts, Rooms & more</h1>
            <input style={{ fontSize: isIpad ? '12px' : isLargeDesktop ? '16px' : '14px' }} type="text" className='myS' id="mySearch" placeholder="🔍 Search for anything" title="Type in a category"></input>
            <Link to="/Map"><ul className='M' style={{ fontSize: isIpad ? '12px' : isLargeDesktop ? '20px' : '16px' }}>🗺️</ul></Link>
          </div>

          <div className='body2' >

            <ul style={{ marginBottom: '0' }}>
              <li style={{ float: 'left', textAlign: 'center', fontSize: isIpad ? '10px' : isLargeDesktop ? '18px' : '14px' }}><a href="/Hotels">Hotels</a></li>
              <li style={{ float: 'left', textAlign: 'center', fontSize: isIpad ? '10px' : isLargeDesktop ? '18px' : '14px' }}><a href="Cheap">Cheap Hotel</a></li>
              <li style={{ float: 'left', textAlign: 'center', fontSize: isIpad ? '10px' : isLargeDesktop ? '18px' : '14px' }}><a href="/Near">Hotel near me</a></li>
              <li style={{ float: 'left', textAlign: 'center', fontSize: isIpad ? '10px' : isLargeDesktop ? '18px' : '14px' }}><a href="/Long">Long trip</a></li>
              <li style={{ float: 'left', textAlign: 'center', fontSize: isIpad ? '10px' : isLargeDesktop ? '18px' : '14px' }}><a href="/Activity">Activities</a></li>
            </ul>

          </div>
          <div className='body3' >

          </div>
          <div className='body4' >
            <div className='Line'></div>
          </div>
          <Link to="/Hotels">
            <button className='body5' >
              <h1 style={{ marginBottom: '0px', fontSize: isIpad ? '16px' : isLargeDesktop ? '28px' : '24px' }} className='two'>2 adults</h1>
              <p style={{ marginBottom: '0px', fontSize: isIpad ? '12px' : isLargeDesktop ? '20px' : '14px' }} className='room'>1 Room</p>
            </button>
          </Link>

        </div>
        <div >
          <button className='Bsearch'>Search</button>
        </div>




      </div>
    </div>

  );
}

export default Home;
