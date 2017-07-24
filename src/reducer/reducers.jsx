import * as BlogActions from '../actionTypres/actionsTypes'

const initialState = {
  fetching: false,
  fetched: false,
  data:[],
  markedData:[],
  error:null
}
export default (state = initialState ,action) => {
  switch (action.type) {

    case BlogActions.BlogDataStarted:
    return {...state, feaching: true}
    
    case BlogActions.BlogDataCompleted:
    return {...state,
      fetching: false,
      fetched: true,
      data:action.payload.data.slice(0, 97)}
    
    case BlogActions.BlogDataError:
    return {...state,
      fetching: false,
      fetched: false,
      error: action.payload}
    
    case BlogActions.markBlogData:
      let added = true;
      const newState= {
        fetching: false,
        fetched: true,
        data:[],
        markedData:[],
        error:null
      }
      state.data.map((data, key)=>{
        newState.data.push(data)
      })
      state.markedData.map((data, key)=>{
        newState.markedData.push(data)
        if(data === action.payload){
          newState.markedData.splice(key,1);
          added = false;
        }
      })
      if(added){
        newState.markedData.push(action.payload);
      }else{
        added = true;
      }
      return newState
    
    default:
    return state
  }
}
