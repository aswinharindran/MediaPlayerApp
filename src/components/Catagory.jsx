
import React, { useEffect, useState } from 'react'
import { Modal, Form, FloatingLabel, Button } from 'react-bootstrap'
import { deleteCategoryAPI, getAllCategoryAPI, removeVideoAPI, saveCategoryAPI, updateCategoryAPI } from '../Services/allAPI';
import VideoCard from './VideoCard';


const Catagory = ({ setDeleteResponseFromCategory,deleteResponseFromView }) => {
  const [allCategories, setAllCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    getAllCategory();
  }, [deleteResponseFromView])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSaveCategory = async () => {
    if (categoryName) {
      const categoryDetails = { categoryName, allVideos: [] };
      try {
        const result = await saveCategoryAPI(categoryDetails);
        if (result.status >= 200 && result.status < 300) {
          handleClose();
          alert("category created");
          getAllCategory();
        }
      }
      catch (err) {
        console.log(err);

      }
    } else {
      alert("Please provide a name to category!")
    }
  }

  const getAllCategory = async () => {
    try {
      const result = await getAllCategoryAPI();
      if (result.status >= 200 && result.status < 300) {
        setAllCategory(result.data);

      }
    } catch (err) {
      console.log(err);

    }
  }
  console.log(allCategories);

  const removecategory = async (id) => {
    try {
      await deleteCategoryAPI(id)

      getAllCategory()
    } catch (error) {
      console.log(error);

    }
  }
  const dragOverCategory = (e) => {
    e.preventDefault(0)
  }
  const videoCardDropOverCategory = async (e, categoryDetails) => {
    console.log("inside videoCardCategoryDetails");
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(categoryDetails);
    categoryDetails.allVideos.push(videoDetails)
    console.log(categoryDetails);
    await updateCategoryAPI(categoryDetails)
    getAllCategory()
    const result = await removeVideoAPI(videoDetails.id)
    setDeleteResponseFromCategory(result)
  }
  const categoryVideoDragStarted = (e,dragVideoDetails,categoryDetails)=>{
    console.log("inside categoryVideoDragStarted");
    let dragData={video:dragVideoDetails,categoryDetails}
    e.dataTransfer.setData("dragData",JSON.stringify(dragData))
    
  }

  return (
    <>
      <div className="d-flex justify-content-around">
        <h3>All Catagories</h3>
        <button onClick={handleShow} className="btn btn-warning ms-3 rounded-circle fa-bolder fs-5">+</button>
      </div>
      {/*Display all category */}
      <div className="container-fluid mt-3">
        {/*Single category view */}
        {
          allCategories?.length > 0 ?

            allCategories?.map(categoryDetails => (
              <div droppable="true" onDragOver={dragOverCategory} onDrop={e => videoCardDropOverCategory(e, categoryDetails)} key={categoryDetails?.id} className="border rounded p-3 mb-3">
                <div className="d-flex justify-content-between">
                  <h5>{categoryDetails?.categoryName}</h5>
                  <button onClick={() => removecategory(categoryDetails?.id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
                </div>
                {/* display category videos */}
                <div className="row mt-2">
                  {


                    categoryDetails?.allVideos?.length > 0 &&
                    categoryDetails?.allVideos?.map(video => (
                      <div draggable={true} onDragStart={e=>categoryVideoDragStarted(e,video,categoryDetails)}  key={video?.id} className="col-lg-4">
                        {/*video card */}
                        <VideoCard insideCategory={true} displayData={video}/>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
            :
            <div className="fw-bolder text-danger fs-5">No categories addedd</div>


        }
      </div>

      <Modal
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category Details!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingCategoryName" label="Category Name" className="mb-3">
            <Form.Control onChange={e => setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSaveCategory} className='btn btn-info' variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default Catagory
