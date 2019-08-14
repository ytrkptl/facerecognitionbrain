import React from 'react';
import ProfileIcon from '../Profile/ProfileIcon';
import Logo from '../Logo/Logo';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn, toggleModal, imageToChange }) => {
    if (isSignedIn) {
      return (
        <nav className="navHome">
          <Logo />
          <ProfileIcon imageToChange={imageToChange} onRouteChange={onRouteChange} toggleModal={toggleModal}/>
        </nav>
      );
    } else {
      return (
        <nav className="nav">
          <Logo />
          <div style={{display: 'inline-flex', justifyContent: 'center'}}>
            <button onClick={() => onRouteChange('signin')} className='customLink'>Sign In</button>
            <button onClick={() => onRouteChange('register')} className='customLink'>Register</button>
          </div>
        </nav>
      );
    }
}

export default Navigation;