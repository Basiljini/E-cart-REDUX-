import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{width:'100%',height:'700px'}}>
      <hr />
     
     <div className='footer d-flex justify-content-evenly w-100'>

      <div className='website ' style={{width:'400px'}}>
       <h5> <i className="fa-solid fa-cloud-arrow-up"></i>{''}E-Cart</h5>
       <p>India's largest logistics and supply chain arm offering seamless end-to-end fulfilment services for businesses. We aim to provide superior customer experience and hassle-free logistics.<br />
        Code licensed : BIT <br />
        version: m-p.v1.0
       </p>
      </div>

      <div className='link d-flex flex-column'>
        <h5>Links</h5>
        <br />
  
      <Link to={'http://localhost:3000'} style={{textDecoration:'none'}}>Home</Link>
      <Link to={'http://localhost:3000/wishlist'} style={{textDecoration:'none'}}>Wishlist</Link>
      <Link to={'http://localhost:3000/cart'} style={{textDecoration:'none'}}>Cart</Link>

      </div>

      <div className='link d-flex flex-column'>
        <h5>Guides</h5>
        <br />
      <Link to={'https://react.dev/'} style={{textDecoration:'none'}}>React</Link>
      <Link to={'https://github.com/'} style={{textDecoration:'none'}}>Github</Link>
      <Link to={'  https://react.dev/community/team'} style={{textDecoration:'none'}}>Meet The Team</Link>
      <Link to={'https://www.linkedin.com/feed/'} style={{textDecoration:'none'}}>Linkedin</Link>
      <Link to={'https://bootswatch.com/'} style={{textDecoration:'none'}}>Bootswatch</Link>
      <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none'}}>Bootstrap</Link>

      </div>

      <div >
        <h5>Contact Us</h5>
        <div>
          <form action="" >
            <input type="text" placeholder='Enter your mail Id' /><i className="fa-solid fa-circle-arrow-right ms-2"></i>
          </form>
        </div>
        <br />
        <div className='d-flex justify-content-between mt-3'>
        <i className="fa-solid fa-message"></i>
        <i className="fa-solid fa-envelope"></i>
        <i className="fa-solid fa-share"></i>
        <i className="fa-brands fa-github"></i>
        </div>
      </div>

     </div>
     <br />
     <br />
     <div>
      <p>Copyright © 2023 Media Player. Built with React.</p>
     </div>
    </div>
  )
}

export default Footer