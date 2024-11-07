import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import {  getAllVideoAPI, saveVideoAPI, updateCategoryAPI } from '../Services/allAPI'

const View = ({addResponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView}) => {
  const [deleteVideoResponceFromVideoCard, setDeleteVideoResponceFromVideoCard] = useState("")

  const [allVideos, setAllVideos] = useState([])

  useEffect(() => {
    getAllVideos()
  },[addResponseFromHome,deleteVideoResponceFromVideoCard,deleteResponseFromCategory])
  console.log(allVideos);

  const getAllVideos = async () => {
    try {
      const result = await getAllVideoAPI()
      console.log(result);
      if (result.status >= 200 && result.status< 300) {
        setAllVideos(result.data)
      }

    } catch (err) {
      console.log(err);
    }
  }
  const dragOverView=(e)=>{
    e.preventDefault()
  }
  const categoryVideoDropOverView= async(e)=>{
    console.log("inside categoryVideoDropOverView");
    const {video,categoryDetails}=JSON.parse(e.dataTransfer.getData("dragData"))
    console.log(video,categoryDetails);
    const updeatedCategoryVideoList=categoryDetails?.allVideos?.filter(item=>item.id!=video?.id)
    const updatedCategory={...categoryDetails,allVideos:updeatedCategoryVideoList}
    console.log(updatedCategory);
    const result=await updateCategoryAPI(updatedCategory)
    setDeleteResponseFromView(result)
    await saveVideoAPI(video)
    getAllVideos()
    
    
  }


  return (
    <>
      <Row  droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDropOverView(e)}>
        {
          allVideos?.length>0?
          allVideos?.map(video=>(
            <Col  key={video?.id} className='mb-2' sm={12} md={6} lg={4}>
              <VideoCard setDeleteVideoResponceFromVideoCard={setDeleteVideoResponceFromVideoCard} displayData={video}/>
            </Col>
          )) 
        :
        <div className="fw-bolder text-danger fs-5">No video are uploaded yet!!!</div>
        }
       
      </Row>
    </>
  )
}

export default View