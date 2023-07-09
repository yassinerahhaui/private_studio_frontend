import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coupe: [],
  time: '',
}


const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    addCoupe: (state,{payload}) => {
      const mydata = state.coupe.filter(obj => obj.id !== payload.id)
      state.coupe = [...mydata,payload]
    },
    addTime: (state,{payload}) => {
      state.time = payload
    },
    deleteCoupe: (state,{payload}) => {
      state.coupe = state.coupe.filter(item => item.id !== payload )
    }
  }
})

export const {addCoupe,addTime,deleteCoupe} = appointmentSlice.actions

export default appointmentSlice.reducer