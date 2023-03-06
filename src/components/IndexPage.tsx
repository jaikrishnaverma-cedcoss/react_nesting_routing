import React from 'react'
import { useParams } from 'react-router-dom';

const IndexPage = () => {
    let { msg } = useParams();
  return (
    <div className="indexpage">
        <h1>Welcome</h1>
        <p>This is React router dom v6</p>
        {
msg&&<h3 style={{color:'rgb(111, 104, 218)'}} >{msg}</h3>
        }
    </div>
  )
}

export default IndexPage