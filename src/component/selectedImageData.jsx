import React from 'react'
import { connect } from 'react-redux';
import selectedData from '../selectedData'

const SelectedPostList = (props) => {

  return(
   <div className = 'mainImageContainer'>
     {
       props.posts.data.map((imagedata, key) => {
         return (
           <div className='subContainer' key = {key}>
             <p>{imagedata.title}</p>
             <div>
               <img alt = {'Demo Image'+key} src ={imagedata.thumbnailUrl}/>
            </div>

         </div>)
       })
     }
   </div>
  )
}

const mapStateToProps = state => {
  return {
    posts: selectedData(state)
  };
};

export default connect(mapStateToProps)(SelectedPostList);
