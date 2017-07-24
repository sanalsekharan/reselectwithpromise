import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import * as BlogActions from './actionTypres/actionsTypes'
import SelecteList from './component/selectedImageData'

class App extends Component {
  constructor(props){
    super(props)
    this.selected = this.selected.bind(this);
  }
  selected(el){
    this.props.dispatch({type: BlogActions.markBlogData,payload: el.target.value})
  }
  render() {
    const data = this.props.data.map((data, key)=>{
      return (<div className= 'subContainer' key = {key}>
        <div>
          <input type = 'Checkbox'onClick = {this.selected} value = {data.id}/>{data.title}
        </div>
        <img alt = {'Demo Image'+key} src ={data.thumbnailUrl}/>
        </div>)
    })
    return (
      <div className="App">
        <h1>Selected Items</h1>
        <SelecteList />
        <br></br>
        <h1>All Items</h1>
        <div className = 'mainImageContainer'>

          {data}
        </div>

      </div>
    );
  }
}

function select (state){
   return {
     data: state.data,
     selectedData: state.markedData
   }
}

export default connect(select)(App);
