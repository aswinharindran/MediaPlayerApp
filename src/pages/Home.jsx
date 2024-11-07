import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Catagory from '../components/Catagory'
import { Link } from 'react-router-dom'
const Home = () => {
  const [deleteResponseFromView,setDeleteResponseFromView]= useState("")
  const [addResponseFromHome,setAddResponseFromHome]=useState("")
  const [deleteResponseFromCategory,setDeleteResponseFromCategory]=useState("")

  return (
    <div style={{paddingTop:'100px'}}>
      <div className="container mb-5 d-flex justify-content-between">
        <Add setAddResponseFromHome={setAddResponseFromHome}/>
        <Link to={'/history'}>Watch history</Link>
      </div>
      <div className="container-fluid row my-5">
        <div className="col-lg-6" style={{textAlign:'center'}}>
          <h3>All videos</h3>
          <View setDeleteResponseFromView={setDeleteResponseFromView} deleteResponseFromCategory={deleteResponseFromCategory} addResponseFromHome={addResponseFromHome}/>
        </div>
        <div className="col-lg-6" style={{textAlign:'center'}}>
          <h3>Catagory</h3>
          <Catagory deleteResponseFromView={deleteResponseFromView} setDeleteResponseFromCategory={setDeleteResponseFromCategory}/>
        </div>
      </div>
    </div>
  )
}

export default Home