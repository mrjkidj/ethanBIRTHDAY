import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../Assets/logo.jpg';

const Header = () => (
  <header>
    <div className={s.header}>
      <img className={s.logo} src={logo} alt="Logo" />

      <nav>
        <div className={s.navi}>
          <div className={s.link}><Link to="/">Home</Link></div>
          <div className={s.link}><Link to="/protected">Protected Page</Link></div>
          <div className={s.link}><Link to="/Tobi">Tobi</Link></div>
          <div className={s.link}><Link to="/Lesha">Lesha</Link></div>
          <div className={s.link}><Link to="/Jann">Jann</Link></div>
          <div className={s.link}><Link to="/Lu">Lu</Link></div>
          <div className={s.link}><Link to="/Li">Li</Link></div>
          <div className={s.link}><Link to="/Mal">Mal</Link></div>
          <div className={s.link}><Link to="/Day">Day</Link></div>
          <div className={s.link}><Link to="/Din">Din</Link></div>
          <div className={s.link}><Link to="/Kert">Kert</Link></div>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
