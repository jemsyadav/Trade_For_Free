import React from 'react'
import img1 from '../Images/img-1.png'
import '../Styles/About.css'
import img2 from '../Images/img-2.png'
import social1 from '../Images/Scoial_media_1.png'
import social2 from '../Images/Scoial_media_2.png'
import social3 from '../Images/Scoial_media_3.png'
import social4 from '../Images/Scoial_media_4.png'
import social5 from '../Images/Scoial_media_5.png'
 import social6 from '../Images/Social_media_6.png'
 import social7 from '../Images/Social_media_7.png'
 import trading1 from '../Images/Trading_Image_1.png'
 import live1 from '../Images/Live_1.png'
 import live2 from '../Images/Live_2.png'
 import live3 from '../Images/Live_3.png'
 import live4 from '../Images/Live_4.png'
 import live5 from '../Images/Live_5.png'
 import live6 from '../Images/Live_6.png'
 import live7 from '../Images/Live_7.png'
 import live8 from '../Images/Live_8.png'
 import line from '../Images/Line.png'
 import calling1 from '../Images/callingalltraders1.png'
 import calling2 from '../Images/callingalltraders2.png'
 import calling3 from '../Images/callingalltraders3.png'
 import calling4 from '../Images/callingalltraders4.png'
 import calling5 from '../Images/callingalltraders5.png'
 import calling6 from '../Images/callingalltraders6.png'
 import trading_img2 from '../Images/trading_image_2.png'
 import line2 from '../Images/line2.png'
 import brand1 from '../Images/Brand1.png'
 import brand2 from '../Images/Brand2.png'
 import brand3 from '../Images/Brand3.png'
 import brand4 from '../Images/Brand5.png'
 import brand5 from '../Images/Brand6.png'
 import brand6 from '../Images/Brand7.png'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div>
    <div className="container ">
    <div className="row">
        <div className="col-lg-6" style={{color:"white"}}>
            <img src={img1} alt="" />
            <h2>Trade for free*</h2>
            <p>Trade Perpetual Contracts with no fees*, deep liquidity, <br />and up to 20× more Buying Power. Deposit just $10 to get started.</p>
            <div className="main_Button" style={{display:"flex",gap:"1rem",flexWrap:"wrap" , paddingBottom:"2rem", }}>
                <div className="tradenow">
                <a href=""><button className='Button_Gradient'>Trade Now</button></a>
                </div>
                <div className="learn_more">
              <a href=""><button className='Button_Gradient'> Learn More</button></a>
                </div>
                <div className="Use_the_api">
                <a href=""><button className='Button_Gradient'>Use The Api</button></a>
                </div>
                <div className="Join_discord">
                <a href=""><button className='Button_Gradient'>Join Discord</button></a>
                </div>
            </div>
            <div className="main_Now_Avilable_on_mobile" >
            <div className="App_Store" style={{border:"2px solid black" , padding:"23px" , borderRadius:"2rem" , }}>
                <div className="Mobile">
                    <h2>Now available on mobile</h2>
                    <h6 style={{backgroundColor:""}}>Available for iOS now. Coming to Android early <br />next year!</h6>
                </div>
                <div className="Mobile_button_main" style={{display:"flex",gap:""}}>
                <div className="mobile_button2" style={{marginTop:"25px"}}>
                <a href=""><button className='Button_Gradient' style={{borderRadius:"1rem"}}>Learn More</button></a>
                </div>
                <div className="app_store_mobile">
               <img src={img2} alt="" />
                </div>
                </div>
                </div>
                <div className="Main_Social_Media_logo" style={{display:"flex",flexWrap:"wrap", gap:"-3px"}}>
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
                    {/* <div className="social_6">
                        <img src={social6} alt="" />
                    </div>
                    <div className="social_7">
                        <img src={social7} alt="" />
                    </div> */}
                </div>
            </div>
        </div>
        <div className="col-lg-6" style={{color:"white"}}>
            <img src={trading1} alt="" width={"100%"}/>
        </div>
    </div>
     <hr style={{color:"red"}} />
     <hr style={{color:"red"}} />

     <div className="Start_Trading">
        <div className="row" style={{color:"white"}}>
            <div className="col-lg-12">
                <h6>NOW LIVE</h6>
                <h2>START TRADING</h2>
                <p>We are continuously launching new Perpetual <br />Contract markets.</p>
            </div>
            <div className="col-lg-3">
              <img src={live1} alt=""  style={{ paddingBottom:"2rem"}} />
            </div>
            <div className="col-lg-3"  style={{ paddingBottom:"2rem"}}>
              <img src={live2} alt="" />
            </div>
            <div className="col-lg-3"  style={{ paddingBottom:"2rem"}}>
              <img src={live3} alt="" />
            </div>
            <div className="col-lg-3"  style={{ paddingBottom:"2rem"}}>
              <img src={live4} alt="" />
            </div> 
       
            </div>
            <div className="row">
                
            <div className="col-lg-3"  style={{ paddingBottom:"2rem"}} >
              <img src={live5} alt="" />
            </div>
            <div className="col-lg-3"  style={{ paddingBottom:"2rem"}}>
              <img src={live6} alt="" />
            </div>
            <div className="col-lg-3"  style={{ paddingBottom:"2rem"}}>
              <img src={live7} alt="" />
            </div>
            <div className="col-lg-3" style={{ paddingBottom:"2rem"}}>
              <img src={live8} alt="" />
            </div>
            </div>

        </div>
        <img src={line} alt="" />
        <hr className='hrtag'  style={{color:"red"}}/>
        <div className="row" style={{color:"white"}}>
            <div className="col-lg-5">
             <h6>CALLING ALL TRADERS</h6>
             <h2> THE WAIT IS OVER, <br />LAYER 2 IS HERE</h2>
             <p>We built the fastest and most powerful decentralized <br />exchange ever</p>
              <div className="img_contents" style={{display:"flex" ,gap:"1rem"}}>
                <div className="img1">
                  <img src={calling1} alt=""  />
                </div>
                <div className="Paragraph_contents">
                    <p>Low fees, no gas costs</p>
                    <p>Once you deposit to Layer 2, you will no longer <br />pay fees to miners for each transaction.</p>
                </div>
              </div>
              <div className="img_contents" style={{display:"flex",gap:"1rem"}}>
                <div className="img1">
                  <img src={calling2} alt="" />
                </div>
                <div className="Paragraph_contents">
                    <p>Lightning quick</p>
                    <p>Trades are executed instantly and confirmed on <br />the blockchain within hours.</p>
                </div>
              </div>
              <div className="img_contents" style={{display:"flex",gap:"1rem"}}>
                <div className="img1">
                  <img src={calling3} alt="" />
                </div>
                <div className="Paragraph_contents">
                    <p>Fast withdrawals</p>
                    <p>Unlike other platforms, there is no wait required <br />to withdraw your funds from Layer 2.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
            <img src={trading_img2} alt="" width={"100%"} />
            </div>
        </div>
        <div className="row" style={{color:"white" , paddingTop:"3rem ",}}>
            <div className="col-lg-4">
            <div className="img_contents" style={{display:"flex" , gap:"1rem"}}>
                <div className="img1">
                  <img src={calling4} alt="" />
                </div>
                <div className="Paragraph_contents">
                    <p>Secure  & Private</p>
                    <p>Once you deposit to Layer 2, you will no longer <br />pay fees to miners for each transaction.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="img_contents" style={{display:"flex", gap:"1rem"}}>
                <div className="img1">
                  <img src={calling5} alt="" />
                </div>
                <div className="Paragraph_contents">
                    <p>Cross Margining</p>
                    <p>Once you deposit to Layer 2, you will no longer <br />pay fees to miners for each transaction.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="img_contents" style={{display:"flex",gap:"1rem"}}>
                <div className="img1">
                  <img src={calling6} alt="" />
                </div>
                <div className="Paragraph_contents">
                    <p>Mobile Friendly</p>
                    <p>Once you deposit to Layer 2, you will no longer <br />pay fees to miners for each transaction.</p>
                </div>
              </div>
            </div>
        </div>
        <div className="main_line" style={{display:"flex",justifyContent:"space-between"}}>
            <div className="line_image1" >
           <img src={line2} alt="" width={"100%"} />
            </div>
            <div className="line_image2">
            <img src={line2} alt=""  width={"100%"} />
            </div>
        </div>
        <div className="row" style={{color:"white",textAlign:"center",paddingTop:"3rem"}}>
            <div className="col-lg-12">
                <h6>BATTLE-TESTED</h6>
                <h2>Trusted by over 25,000 traders</h2>
                <p>We believe everyone should have access to open & powerful financial tools.</p>
            </div>
        </div>
        <div className="row" style={{textAlign:"center",color:"white"}}>
            <div className="col-lg-3" style={{paddingTop:"3rem"}} >
            <div className="border" style={{border:"2px solid red" , padding:"2rem" ,backgroundColor:"#141414"}}>
                <h6>Trading Volume</h6>
                <hr />
                <h4>$943,715,061</h4>
                <hr />
                
                <p>LAST 24H</p>
                </div>
            </div>
            <div className="col-lg-4" style={{border:"2px solid " , padding:"4rem",background: "linear-gradient(137deg, #7641E8 0%, #ff4d2f66 45%,#000000ad 150%)",borderRadius:"1rem"}}>
            <h6>Trading Volume</h6>
            <hr />
                <h4>$943,715,061</h4>
                <hr />
                <p>LAST 24H</p>
                </div>
            
            <div className="col-lg-3" style={{paddingTop:"3rem"}} >
            <div className="border" style={{  padding:"2rem" ,backgroundColor:"#141414",border:"0px solid transparent"}}>
               <h6>Trading Volume</h6>
               <hr />
                <h4>$943,715,061</h4>
                <hr />
                <p>LAST 24H</p>
                </div>
                </div>
            </div>
            <img src={line} alt="" />
            <br />
            <br />
            <div className="row" style={{color:"white"}}>
            <div className="col-lg-3">
            <h6>OUR INVESTOR</h6>
                <h3>BACKED BY THE BEST</h3>
                <p>Our global investors include angel <br />investors & leading funds</p>
                
            </div>
            <div className="col-lg-9">
            <div className="Main_Brand" style={{display:"flex",gap:"3rem",paddingTop:"3rem",flexWrap:"wrap"}}>
                    <div className="brand1">
                    <img src={brand1} alt="" />
                    </div> <div className="brand1">
                    <img src={brand2} alt="" />
                    </div>
                    <div className="brand1">
                    <img src={brand3} alt="" />
                    </div>

                    <div className="brand1">
                    <img src={brand4} alt="" />
                    </div>
                    <div className="brand1">
                    <img src={brand5} alt="" />
                    </div>
                    <div className="brand1">
                    <img src={brand6} alt="" />
                    </div>

                </div>
            </div>
            </div>
            <br /> <br />
            <div className="col-12">
                <p className='text-white'>*Trading and entering into perpetual contracts involves substantial financial and other risks. dYdX does not provide financial advice. “Free Trading” means
that dYdX has removed fees related to placing orders for accounts with less than $100,000 of trading volume in the previous thirty days; other costs may still
apply, including, but not limited to perpetual funding, depositing and withdrawing funds, and potential liquidation. For additional information, please review
the dYdX Terms of Use.</p>
            </div>
            <div className="row">
                <Footer/>
                
            </div>
               
        </div>
        </div>
    
  
  )
}

export default About
