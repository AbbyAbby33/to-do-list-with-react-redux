import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import TodoVo from '../../models/TodoVo'

export interface TodolistState {
    value: Array<TodoVo>
}

const initialState: TodolistState = {
    value: [
        {id: '0001', name: '買菜', done: false},
        {id: '0002', name: '切水果', done: false},
    ],
}

export const todolistSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<TodoVo>) => {
            state.value.push(action.payload);
        },
        remove: (state) => {
        },
    },
})

// Action creators are generated for each case reducer function
export const { add, remove } = todolistSlice.actions

export default todolistSlice.reducer