import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter as Router } from 'react-router-dom';

import TodoApp from './toDoRedux/TodoApp'

function App() {
    return (
        <div className='App'>
            <Router>
                <TodoApp />
            </Router>
        </div>
    )

}

export default App;