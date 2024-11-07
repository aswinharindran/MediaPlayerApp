import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 container w-100'>
      <div className="d-flex justify-content-between">
        <div className="intro" style={{width:'400px'}}>
          <h5>
            <i className="fa-solid fa-music me-2"></i>
            Media Player
          </h5>
          <p>Designed and built with all the love in the world by the Aswin with the help of our contributors.</p>
          <p>Code licensed Aswin, docs CC BY 1.0.</p>
        </div>
        
          <div className="d-flex flex-column">
            <h5>Links</h5>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
            <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
            <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History Page</Link>

          </div>

          <div className="d-flex flex-column">
            <h5>Guides</h5>
            <a  style={{textDecoration:'none',color:'white'}} href="https://react.dev/" target='_blank'>React</a>
            <a  style={{textDecoration:'none',color:'white'}} href="https://reactrouter.com/en/main" target='_blank'>React Router</a>
            <a  style={{textDecoration:'none',color:'white'}} href="https://react-bootstrap.github.io/" target='_blank'>React Bootstrap</a>
          </div>

          <div className="d-flex flex-column">
              <div className="dflex"><h5>Contact Us</h5>
              <input type="text" placeholder='Enter your email here...' className="form-controll me-2 rounded-5"/>
              <button className="btn btn-info"><i className="fa-solid fa-arrow-right"></i></button></div>
              <div className="d-flex  justify-content-between mt-3">
                <a href="#" style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-brands fa-twitter"></i></a>
                <a href="#" style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-brands fa-instagram"></i></a>
                <a href="#" style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-brands fa-facebook"></i></a>
                <a href="#" style={{textDecoration:'none',color:'white'}} target='_blank'></a>
                <a href="#" style={{textDecoration:'none',color:'white'}} target='_blank'></a>
                <a href="#" style={{textDecoration:'none',color:'white'}} target='_blank'></a>
            </div>
          </div>
          
      </div>
      <p className="text-center mt-3">Copyright &copy; July @024 batch ,Media player app Built with React</p>
    </div>
  )
}

export default Footer