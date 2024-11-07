import React from 'react'
import { Link } from 'react-router-dom'
import videoIcon1 from '../assets/videoIcon1.png'
import videoIcon2 from '../assets/videoIcon2.png'
import videoIcon3 from '../assets/videoIcon3.png'

import { Card } from 'react-bootstrap'

const Landing = () => {
  return (
    <div className="container" style={{ paddingTop: '100px' }}>
      <div className="row align-item-center" style={{ marginBottom: '100px' }}>
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Media Player App will allow user to add or remove their
            uploaded videos from youTube and also allow them to arrange it in different categories by
            drag and drop. User can also have the provision to manage their watch history as well. What
            are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'} className='btn btn-info'>Get Strated</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="Landing Image" className="img-fluid ms-5" />
        </div>
      </div>
      <div className="my-5" >
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img variant="top" src={videoIcon1} style={{ height: '250px' }} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can upload,view and remove the videos
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img variant="top" src={videoIcon2} style={{ height: '250px' }} />
              <Card.Body>
                <Card.Title>Categorise Videos</Card.Title>
                <Card.Text>
                  Users can categorise the videos by drag and drop feature
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img variant="top" src={videoIcon3} style={{ height: '250px' }} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can manage the watch history of all videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

      </div>
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-warning">Simple, Fast and powerfull</h3>
          <p style={{ textAlign: 'justify' }}> <span className="fs-5 fw-bolder">Play everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit recusandae, excepturi, ducimus nam harum, quo molestias nobis ullam doloremque incidunt ut quidem. Eveniet et culpa maiores ab nesciunt corporis quis.</p>
          <p style={{ textAlign: 'justify' }}> <span className="fs-5 fw-bolder">Catagorize videos</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit recusandae, excepturi, ducimus nam harum, quo molestias nobis ullam doloremque incidunt ut quidem. Eveniet et culpa maiores ab nesciunt corporis quis.</p>
          <p style={{ textAlign: 'justify' }}> <span className="fs-5 fw-bolder">Managing history</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit recusandae, excepturi, ducimus nam harum, quo molestias nobis ullam doloremque incidunt ut quidem. Eveniet et culpa maiores ab nesciunt corporis quis.</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="100%" height='360' src="https://www.youtube.com/embed/kQ5iw0x7WKs?si=iXm3itGGlKSUzMYx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing