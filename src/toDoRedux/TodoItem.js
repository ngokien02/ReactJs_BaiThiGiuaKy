import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions';

export default function TodoItem({ item, idx }) {

    const [noiDung, setNoiDung] = useState('');
    const dispatch = useDispatch();
    const editItem = useSelector((state) => state.todoState.editItem);

    useEffect(() => {
        if (editItem && editItem.id === item.id) {
            setNoiDung(editItem.tenCongViec);
        }
    }, [editItem, item.id]);

    const handleButtonDelete = () => {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa công việc này không?");
        if (confirmDelete) {
            dispatch(actions.actionDeleteTodo(item));
        }
    };

    const handleButtonEdit = () => {
        setNoiDung(item.tenCongViec);
        dispatch(actions.actionEditTodo(item));
    };

    const handleButtonSave = () => {
        const updatedTodo = { id: editItem.id, tenCongViec: noiDung };
        if(!updatedTodo.tenCongViec.trim()){
            window.alert('Không được nhập công việc trống!');
            return;
        }
        dispatch(actions.actionSaveTodo(updatedTodo));
        window.alert('Sửa công việc thành công!')
    };

    const handleChangeText = (e) => {
        setNoiDung(e.target.value);
    };

    const isEditing = editItem && item.id === editItem.id;

    return (
        isEditing ? (
            <div>
                <input
                    type='text'
                    value={noiDung}
                    onChange={handleChangeText}
                />
                <button
                    onClick={handleButtonSave}
                >
                    Save
                </button>
            </div>
        ) : (
            <div>
                <span>{idx + 1} - {item.tenCongViec}</span>
                <button
                    onClick={handleButtonEdit}
                >
                    Edit
                </button>
                <button
                    onClick={handleButtonDelete}
                >
                    Delete
                </button>
            </div>
        )
    );
}
