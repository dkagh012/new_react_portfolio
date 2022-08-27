import React, { useState, useCallback } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import "./TodoAdd.css";

const TodoAdd = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []); // 컴포넌트가 렌더링될 때 단 한번만 함수 생성

  //바꿀때
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      onAdd(value);
      setValue(""); // 입력창 값 비우기
    },
    [onAdd, value]
  );
//검색을 했을때.
  return (
    <form className="TodoAdd" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요!!"
        value={value}
        onChange={onChange}
      />
      <button type="subt">
        <MdAddCircleOutline />
      </button>
    </form>
  );
};

export default TodoAdd;