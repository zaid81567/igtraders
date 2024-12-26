import React from 'react'

function Spacer() {
    const spacerStyle = {
        height:"100vh",
        display:"flex",
        alignItems:"end",
        justifyContent:"center",
        paddingBottom:"20px",
    };
  return (
    <div style={spacerStyle}>I am an spacer.</div>
  )
}

export default Spacer