import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coupe: [],
  time: '',
  data: [],
}


const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    addCoupe: (state,{payload}) => {
      const mydata = state.coupe.filter(obj => obj.id !== payload.id)
      state.coupe = [...mydata,payload]
    },
    addData: (state,{payload}) => {
      const mydata = state.data.filter(obj => obj !== payload)
      state.data = [...mydata,payload]
    },
    addTime: (state,{payload}) => {
      state.time = payload
    },
    deleteCoupe: (state,{payload}) => {
      state.coupe = state.coupe.filter(item => item.id !== payload )
    },
    deleteData: (state,{payload}) => {
      state.data = state.data.filter(obj => obj !== payload)
    }
  }
})

export const {addCoupe,addTime,deleteCoupe,addData,deleteData} = appointmentSlice.actions

export default appointmentSlice.reducer