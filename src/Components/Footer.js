import React from 'react'
import social1 from '../Images/Scoial_media_1.png'
import social2 from '../Images/Scoial_media_2.png'
import social3 from '../Images/Scoial_media_3.png'
import social4 from '../Images/Scoial_media_4.png'
import social5 from '../Images/Scoial_media_5.png'
 import social6 from '../Images/Social_media_6.png'
 import social7 from '../Images/Social_media_7.png'

const Footer = () => {
  return (
    <div>
    <div className="container">
        <div className="row" style={{color:"white" ,display:"flex" , justifyContent:"space-between",paddingTop:"2rem"}}>
            <div className="col">
                <h6> BLOGS </h6>
                <p>FAQs</p>
                <p>TUTORIAL</p>
                <p>HELP CENTER</p>
            </div>
            <div className="col">
                <h6> WEB</h6>
                <p>MOBILE</p>
                <p>TEXTNET</p>
                <p> HEDGIES</p>
            </div>
            <div className="col">
                <h6> TERMS OF USE </h6>
                <p>PRIVACY POLICY</p>
                <p>LEGAL</p>
                <p> MARGIN</p>
            </div>
            <div className="col">
                <h6> DASHBOARD </h6>
                <p> FORMS</p>
                <p>MISSION</p>
                <p> CAREER</p>
            </div>
            <div className="col">
                <h6> DOCUMATIONS </h6>
                <p> GITHUB</p>
                <p>STATUS</p>
                
            </div>
        </div>
    </div>
    <div className="container_fluid">
        <hr style={{color:"white"}}/>
    </div>
    <div className="row">
        <div className="col-lg-4">
        <div className="last_header">
        <h6 style={{paddingTop:"3rem"}} className='text-white'>© 2022 DYDX all rights reserved</h6>
    </div>
        </div>
   
    <div className="col-lg-8">
    <div className="Main_Social_Media_logo" style={{display:"flex",flexWrap:"wrap", gap:"-4rem"}}>
    
                    <div className="social_1">
                        <img src={social1} alt="" />
                    </div>
                    <div className="social_2">
                        <img src={social2} alt="" />
                    </div>
                    <div className="social_3">
                        <img src={social3} alt="" />
                    </div>
                    <div className="social_4">
                        <img src={social4} alt="" />
                    </div>
                    <div className="social_5">
                        <img src={social5} alt="" />
                    </div>

                  <hr style={{color:"#181818"}}/>
                    <div className="social_6">
                        <img src={social6} alt="" />
                    </div>
                    <div className="social_7">
                        <img src={social7} alt="" />
                    </div>
                </div>
                </div>
                </div>
    </div>
  )
}

export default Footer
