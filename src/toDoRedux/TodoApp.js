import { Routes, Route } from 'react-router-dom'
import TodoHeader from './TodoHeader'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'

export default function TodoApp() {
    return (
        <div className='background'>
            <div className='container'>
                <TodoHeader />
                <Routes>
                    <Route path='/' element = { <TodoList /> } />
                    <Route path='themcv' element = { <TodoAdd /> } />
                </Routes>
            </div>
        </div>
    )
}