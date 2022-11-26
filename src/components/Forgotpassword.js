import React from 'react'
import { Link } from 'react-router-dom'
import Forgotpasswordcontent from './Forgotpasswordcontent'
export default function Forgotpassword(props) {
  return (
    <div className="loghom">
      <div className="backgr"></div>
      <div className="loginform">
        <div className="loginf">
          <h2>{props.heading}</h2>
          <p>{props.description}</p>
          <Forgotpasswordcontent/>
          <p className="extra">
          {props.extradesc}<strong><Link style={{color: 'black',textDecoration: 'none'}} to="/login">{props.extradescmore}</Link></strong>
          </p>
        </div>
      </div>
    </div>
  )
}
