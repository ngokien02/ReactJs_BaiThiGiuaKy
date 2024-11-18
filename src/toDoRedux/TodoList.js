import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
    
    const todoList = useSelector((state) => state.todoState.todoList);

    return (
        <div className="container">
            <h1>DANH SÁCH CÔNG VIỆC</h1>
            {todoList.map((item, idx) => (
                <TodoItem key={idx} idx={idx} item={item} />
            ))}
        </div>
    );
}
