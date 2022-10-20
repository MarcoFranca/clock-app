import {createSlice} from "@reduxjs/toolkit";
import moon from "../images/desktop/icon-moon.svg"


const initialState ={
    greetings:"",
    timeIcon: moon,
    background:false,
    backgroundColor:false,
    textColor:false,
    hour:"",
    worldTime:"",
    isHidden:false,
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
        getIsHidden: (state,action)=>{
            state.isHidden = action.payload
        },
    }
})

export const { getTimeIcon, getGreetings, getBackground, getHour, getTimeBase,
    getBackgroundColor, getTextColor, getIsHidden} = counterSlice.actions;

export default counterSlice.reducer;