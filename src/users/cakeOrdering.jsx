import React from 'react'
import { useNavigate } from 'react-router'

export const startOrder=()=>{
  const navigate=useNavigate();
  navigate("/")
}

const CakeOrdering = () => {
  return (
    <div>CakeOrdering</div>
  )
}

export default CakeOrdering