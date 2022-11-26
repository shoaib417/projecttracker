import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import Loginformcontent from './Loginformcontent';

export default function Login(props) {
  return (
    <div className="loghom">
      <div className="backgr"></div>
      <div className="loginform">
        <div className="loginf">
          <h2>{props.heading}</h2>
          <p>{props.description}</p>
          <Loginformcontent/>
          <p className="extra">
          {props.extradesc}<strong><Link style={{color: 'black',textDecoration: 'none'}} to="/register">{props.extradescmore}</Link></strong>
          </p>
        </div>
      </div>
    </div>
  );
}
