import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import * as actions from '../actions';

export default function TodoAdd() {

    const [noiDung, setNoiDung] = useState('');
    const dispatch = useDispatch();

    const handleChangeText = (e) => {
        setNoiDung(e.target.value);
    };

    const handleButtonAdd = () => {
        if(!noiDung.trim()){
            window.alert('Không được nhập công việc rỗng!');
            return;
        }
        const todo = {
            id: Math.floor(Math.random() * 1000 + 1),
            tenCongViec: noiDung
        };
        dispatch(actions.actionAddTodo(todo));
        setNoiDung('');
        window.alert('Thêm công việc thành công!');
    };

    return (
        <div>
            <h1 className="mt-3">THÊM CÔNG VIỆC</h1>
            <input
                type="text"
                placeholder="Nhập công việc"
                value={noiDung}
                onChange={handleChangeText}
            />
            <button
                onClick={handleButtonAdd}
            >
                Add
            </button>
        </div>
    );
}
