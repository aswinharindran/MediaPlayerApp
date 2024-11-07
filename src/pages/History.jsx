import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getAllHistoryAPI } from '../Services/allAPI'

const History = () => {
  const [allVideoHistory, setAllVideoHistory] = useState([])
  useEffect(() => { getAllHistory() }, [])
  const getAllHistory = async () => {
    console.log(allVideoHistory);

    const result = await getAllHistoryAPI()
    if (result.status >= 200 && result.status < 300) {
      setAllVideoHistory(result.data)
    }
    else {
      console.log(result);

    }
  }
  const removeHistory = async (id) => {
    try {
      await deleteHistoryAPI(id)

      getAllHistory()
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="container d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>
      </div>
      <table className="container my-5 table">
        <thead>
          <tr>
            <th>#</th>
            <th>caption</th>
            <th>Link</th>
            <th>Time stamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {
            allVideoHistory?.length > 0 ?
              allVideoHistory?.map((videoDetails, index) => (
                <tr key={videoDetails?.id}>
                  <td>{index + 1}</td>
                  <td>{videoDetails?.caption}</td>
                  <td><a target='_blank' href="{videoDetails?.youTubeLink}">{videoDetails?.youTubeLink}</a></td>
                  <td>{videoDetails?.timeStamp}</td>
                  <td><button onClick={() => removeHistory(videoDetails?.id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></button></td>
                </tr>

              ))
              :
              <div className="fw-bolder text-danger">You didn't watch any video yet!!!</div>
          }
        </tbody>
      </table>
    </div>
  )
}

export default History