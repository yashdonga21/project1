import React from 'react'
import './Greet.css'

export default function Greet() {
  return (
    <div>

<div className="main">
        <div className="card">
            <button className="dismiss" type="button">×</button>
            <div className="header">
                <div className="image">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>
                </div>
                <div className="content">
                    <span className="title">Order Valided</span>
                    <p className="message">Thank you for your purchase. you package will be delivered within 2 days of your
                        purchase</p>
                </div>
                <div className="actions">
                    <button className="history" type="button">Payment Success</button>
                    <a href="Home.html"> <button className="track" type="button">Home</button></a>
                </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}
