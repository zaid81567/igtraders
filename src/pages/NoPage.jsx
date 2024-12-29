import React from 'react'
import { Link } from 'react-router-dom'
import './css/NoPage.css'

function NoPage() {
  return (
    <div className='invalid-page'>
      <div className="invalid-page-container">
          <h1><b>Invalid page</b>, go back to</h1>
          <Link to=".."><button>Home Page</button></Link>
      </div>
    </div>
  )
}

export default NoPage