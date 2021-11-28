import React from 'react'
import { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { remove, add } from './todolistSlice'

export default function Todolist() {
    const todolist = useSelector((state: RootState) => state.todolist.value)
    const dispatch = useDispatch()

    return (
        <div>
            Todolist
            {todolist.map(v => {
                return <div>{v.name}{v.done ? '完成' : '未完成'}</div>
            })}
        </div>
    )
}
