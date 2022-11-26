import React from 'react'
import { Link } from 'react-router-dom'
import Registerformcomponent from './Registerformcomponent'

export default function Register(props) {
  return (
    <div>
      <div className="loghom">
      <div className="loginform">
        <div className="loginf">
          <h2>{props.heading}</h2>
          <p>{props.description}</p>
          <Registerformcomponent/>
          <p className="extra">
          {props.extradesc}<strong><Link style={{color: 'black',textDecoration: 'none'}} to="/login">{props.extradescmore}</Link></strong>
          </p>
        </div>
      </div>
      <div className="backgr"></div>
    </div>
    </div>
  )
}
