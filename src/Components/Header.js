import { useState } from 'react';

const Navbar1=()=> {
  const [icon,seticon] = useState(true)
  const HandleIcon = () => {
    seticon(!icon)
  }
  return (
    
    <div className="container">
   
  
    <nav  className=" style navbar navbar-expand-lg navbar-light bg-black" style={{paddingBottom:"3rem"}}>
    
  
    {/* <img className='Logo' src={headerlogo} >
   
    </img>  */}
   
    <div className='toggle_icon'>
    <div onClick={HandleIcon}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span>
 { icon   ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>:<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>}
</span>
    </div>
    </div>
    <a href=""><button className='Button_Gradient' style={{marginRight:"8rem"}}>LOGO</button></a>

    
    
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
        
          <a className="nav-link active text-white " aria-current="page" href="/">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class=" nav-link text-white" href="/about">COMPANY</a>
        </li>
        

        <li class="nav-item">
          <a class="nav-link text-white"   href="/services">PRODUCTS</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-white"  href="/benifits">GOVERNENCE</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-white"  href="/ourteam">DEVELOPERS</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-white"  href="/ourteam">COMMUNITY</a>
        </li>

       
      </ul>
     
      <div className="language_selector" style={{marginLeft:"16rem",borderRadius:"2rem", border:"12px solid #2d2222;"}}>
      <select class="selectpicker" data-width="fit">
    <option data-content='<span class="flag-icon flag-icon-us"></span> English'>English</option>
  <option  data-content='<span class="flag-icon flag-icon-mx"></span> Español'>Hindi</option>
</select>
</div>
    </div>
    <a href=""><button className='Button_Gradient'>Trade Now</button></a>
</nav>


</div>

  
 
  );
  
}

export default Navbar1;