import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value); //받은 value 초기화
  }, []);

  const keyEnter = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); // value값 초기화

      // submit 이벤트는 브라우저에서 리프레시 발생시킴
      // 리프레시 방지 위해 이 함수 호출
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={keyEnter} >
      <input
        placeholder="할 말을 입력하세요 "
        value={value}
        onChange={onChange}
      />

      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
