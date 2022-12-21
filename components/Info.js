import React from 'react'

export default function Info() {
    return(
        <div className="info-container">
          <div className="info-image"><img src='../images/headshot2.jpeg' /></div>
           <h1>Sachi Goto</h1>
           <h2>Frontend Developer</h2>
           <h3><a href="https://sachigoto.me">My portfolio site</a></h3>
           <div className="info-buttons">
                 <button className="email-btn"><a href="mailto:gotosachiii@gmail.com"><i className="fa-solid fa-envelope"></i>Email</a></button>
            <button className="linkedin-btn"><a href="https://www.linkedin.com/in/sachi-goto"><i className="fa-brands fa-linkedin"></i>LinkedIn</a></button>
           </div>
         </div>
    )
}