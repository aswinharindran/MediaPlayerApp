import React, { useState } from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { saveVideoAPI } from '../services/allAPI'


const Add = ({setAddResponseFromHome}) => {
  const [invalidYTLink, setInvalidYTLink] = useState(false)
  const [videoDetails, setVideoDetails] = useState({
    caption: "", imgUrl: "", youTubeLink: ""
  })
  console.log(videoDetails);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const extractigUrlFromYt = (userInputYTlink) => {
    if (userInputYTlink.includes("https://www.youtube.com/watch?v=")) {
      console.log(userInputYTlink.split("v=")[1].slice(0, 11));
      const videoId = userInputYTlink.split("v=")[1].slice(0, 11);
      setInvalidYTLink(false)
      setVideoDetails({ ...videoDetails, youTubeLink: `https://www.youtube.com/embed/${videoId}` })
    }
  }
  const handleVideo = async () => {
    const { caption, imgUrl, youTubeLink } = videoDetails;
    if (caption && imgUrl && youTubeLink) {
      // alert("successfully stored video details")
      try {
        const result = await saveVideoAPI(videoDetails)
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          alert("successfully uploaded video ")
          handleClose()
          //pass resilt to view component
          setAddResponseFromHome(result)
        }
        else {
          console.log(result);

        }
      } catch (err) {
        console.log(err);

      }
    }
    else {
      alert("Please fill the form!!!")
    }
  }
  return (

    <>
      <div className="d-flex align-items-center">
        <h5>Upload new Video</h5>
        <button onClick={handleShow} className="btn btn-warning ms-3 rounded-circle fw-bolder fs-5">+</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
            <FloatingLabel controlId="floatingCaption" label="Caption" className="mt-1">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="Caption" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingUrl" label="Video image url" className="mt-3">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, imgUrl: e.target.value })} type="text" placeholder="Video image Url" />
            </FloatingLabel>
            <FloatingLabel onChange={e => extractigUrlFromYt(e.target.value)} controlId="floatingLink" label="Video youtube link" className="mt-3">
              <Form.Control type="text" placeholder="Video Youtube link" />
            </FloatingLabel>
            {
              invalidYTLink &&
              <div className="text-danger fw-bolder mt-2">Invalid YouTube Link</div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleVideo} className='btn btn-info' variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add