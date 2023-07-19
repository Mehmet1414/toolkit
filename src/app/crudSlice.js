import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tasks:[],

}
const crudSlice = createSlice({
    name:"crudSlice",
    initialState,
    reducers:{
        addTask:(state,action)=> {
            state.tasks = [...state.tasks, action.payload]
            console.log("state >>>",state.tasks)
        },
        removeTask:(state,action) =>{
            state.tasks.splice(action.payload,1)
        },
        updateTask: (state, action) => {
            const { id, updatedTask } = action.payload;
            const index = state.tasks.findIndex((task) => task.id === id);
            if (index !== -1) {
              state.tasks[index] = { ...state.tasks[index], ...updatedTask };
            }
          },
       
    }
})
export const {addTask, removeTask, updateTask} = crudSlice.actions

export default crudSlice.reducer