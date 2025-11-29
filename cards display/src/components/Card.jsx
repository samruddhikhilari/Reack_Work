import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const Card = ({data}) => {
    
  const [bookMarkFlag, setBookMarkFlag] = useState(false);

  return (
    <>
       <div className="holder">
    {
      data.map((obj,idx)=>{
         return (<div className="card" key={idx}>
      <div className="top"> 
        <img src={obj.img} alt="" />
        <div>
          <h4>{obj.name}</h4>
        </div>
        <div className="saved">
             <h6> {(bookMarkFlag) ? "Saved" : "UnSaved"} </h6>
          <button onClick={()=>{
            setBookMarkFlag(!bookMarkFlag);
          }}>{
              (bookMarkFlag)? <i class=" logo ri-bookmark-line"></i> : <i class="logo ri-bookmark-3-fill"></i>
            }
          </button>
        </div>
      </div>
      <div className="center">
          <div className="first">
            <h4>{obj.name}</h4>
            <h6>{obj.posted}</h6>
          </div>
          <h3>{obj.heading}</h3>
          <div className="sec">
          <button className="btn">{obj.jobType}</button>
          <button className="btn">{obj.jobLevel}</button>
          </div>
          <p>{obj.jobDesc}</p>
      </div>
      <div className="bottom">
        <div className="first">
          <h4>{obj.salary}</h4>
          <h5>{obj.jobLocation}</h5>
        </div>
        <div className="sec">
          <button className="btn" onClick={()=>{
            alert("You Applied successfully !!!")
          }}> Apply Now</button>
        </div>
      </div>
    </div>)
      }
    )
    }
    </div>
    </>
  )
}

export default Card
