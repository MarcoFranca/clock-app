import {createSlice} from "@reduxjs/toolkit";


const initialState ={
    greetings:"",
    timeIcon: "",
    background:false,
    backgroundColor:false,
    textColor:false,
    hour:"",
    worldTime:"",
}

const counterSlice = createSlice({
    name: 'date',
    initialState,
    reducers:{
        getGreetings: (state,action)=>{
            state.greetings = action.payload
        },
        getBackground: (state, action)=>{
            state.background = action.payload
            },

        getTimeIcon: (state,action)=>{
            state.timeIcon = action.payload
        },
        getHour: (state,action)=>{
            state.hour = action.payload
        },
        getTimeBase: (state,action)=>{
            state.worldTime = action.payload
        },
        getBackgroundColor: (state,action)=>{
            state.backgroundColor = action.payload
        },
        getTextColor: (state,action)=>{
            state.textColor = action.payload
        },
    }
})

export const { getTimeIcon, getGreetings, getBackground, getHour, getTimeBase,
    getBackgroundColor, getTextColor} = counterSlice.actions;

export default counterSlice.reducer;