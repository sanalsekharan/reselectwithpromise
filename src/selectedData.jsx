import { createSelector } from 'reselect'

const dataSelector = state => state.data
const selectedDataId = state => state.markedData

const getData = (imagedata, selectedDataId) => {
  const newSelectedState = {
    data:[]
  }
  imagedata.map((data) => {
    selectedDataId.map((dataId) => {
      if(dataId == data.id ) {
        newSelectedState.data.push(data)
      }
    })
  })
  return newSelectedState;
};

export default createSelector(
  dataSelector,
  selectedDataId,
  getData
);
