import * as types from '../../types'

const initialState = {
    todoList: [
        { id: '1', tenCongViec: 'Làm bài tập' },
        { id: '2', tenCongViec: 'Nghe nhạc' },
        { id: '3', tenCongViec: 'Tập thể dục' },
        { id: '4', tenCongViec: 'Xem phim' },
    ],
    editItem: {}
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TODO_ADD:
            //them du lieu
            let dataAdd = action.data
            let currentTodoListAdd = [...state.todoList]
            currentTodoListAdd = [...currentTodoListAdd, dataAdd]
            return {
                ...state, todoList: currentTodoListAdd
            }
        case types.TODO_DELETE:
            let dataDelete = action.data
            let currentTodoListDelete = [...state.todoList]
            currentTodoListDelete = currentTodoListDelete.filter((item) => item.id !== dataDelete.id);
            return { ...state, todoList: currentTodoListDelete }
        case types.TODO_EDIT:
            let dataEdit = action.data
            return { ...state, editItem: dataEdit }
            case types.TODO_SAVE:
            let dataSave = action.data
            let currentTodoListSave = [...state.todoList]
            let todoIndex = currentTodoListSave.findIndex((item)=>item.id===dataSave.id);
            currentTodoListSave[todoIndex] = dataSave
            return { ...state, todoList: currentTodoListSave, editItem:{} }
        default:
            break;
    }
    return { ...state }
}
export default todoReducer