import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

export const saveVideoAPI=async(videoDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/uploadVideos`,videoDetails)
}
//getAllVideoAPI - get http req called view component  displayed in browser inside its useeffect hook
export const getAllVideoAPI=async()=>{
    return await commonAPI("GET",`${SERVERURL}/uploadVideos`,"")
}

//SaveHistoryAPI -post http req to  http://localhost:3000/history called by videocard component when we play video

export const saveHistoryAPI =async (historyDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/history`,historyDetails)
}

// getAllHistoryAPI-get http req to http://localhost:3000/history called by history component when it open in browser
export const getAllHistoryAPI =async ()=>{
    return await commonAPI("GET",`${SERVERURL}/history`,"")
}

// deleteHistoryAPI-delete http req to http://localhost:3000/history/id called by history component when user click on del button
export const deleteHistoryAPI =async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/history/${id}`,{})
}
// removeVideoAPI-delete http req to http://localhost:3000/uploadVideos/id called by videoCard component when user click on del button
export const removeVideoAPI =async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/uploadVideos/${id}`,{})
}

//saveCategoryAPI -post http req to  http://localhost:3000/catagories called by catagory component when user click on add btn

export const saveCategoryAPI =async (categoryDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/catagories`,categoryDetails)
}

//getAllCategoryAPI -post http req to  http://localhost:3000/catagories called by catagory component when user click on add btn

export const getAllCategoryAPI =async ()=>{
    return await commonAPI("GET",`${SERVERURL}/catagories`,{})
}
// deleteHistoryAPI-delete http req to http://localhost:3000/history/id called by history component when user click on del button
export const deleteCategoryAPI =async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/catagories/${id}`,{})
}

//updateCategoryAPI -PUT http req to  http://localhost:3000/catagories called by catagory component when user drop video over the category
export const updateCategoryAPI =async (categoryDetails)=>{
    return await commonAPI("PUT",`${SERVERURL}/catagories/${categoryDetails.id}`,categoryDetails)
}