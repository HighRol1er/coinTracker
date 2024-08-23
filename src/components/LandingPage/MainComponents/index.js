import React from 'react';
import "./styles.css";
import Button from '../../Common/Button';
import iphone from '../../../assets/phone.svg';
import gradient from '../../../assets/gradient.png';

const MainComponent = () => {
  return (
    <div className='flex-info'>
      <div className='left-component'>
        <h1 className='track-crypto-heading'>Track Crypto</h1>
        <h1 className='real-time-heading'>Real Time.</h1>
        <p className='info-text'>Track crypto through a public api in real time. Visit the dashboard to do so!</p>
        <div className='btn-flex'>
          <Button text={"dashboard"}/>
          <Button text={"share"} outlined={true}/>
        </div>
      </div>
      <div className='phone-container'>
        <img src={iphone} className='iphone'/>
        <img src={gradient} className='gradient'/>
      </div>
    </div>
  )
}

export default MainComponent