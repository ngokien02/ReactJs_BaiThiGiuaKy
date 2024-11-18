import * as types from "./types"
export const actionAddTodo=(item)=>{
    return{
        type:types.TODO_ADD,
        data:item
    }
}
export const actionDeleteTodo=(item)=>{
    return{
        type:types.TODO_DELETE,
        data:item
    }
}
export const actionEditTodo=(item)=>{
    return{
        type:types.TODO_EDIT,
        data:item
    }
}
export const actionSaveTodo=(item)=>{
    return{
        type:types.TODO_SAVE,
        data:item
    }
}