import React, { useState } from 'react';
// import './InputBox.css';

function InputBox(props) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };

  return (
    <div className="input-box">
      <label>{props.label}</label>
      <input type={props.type} value={text} onChange={handleChange} placeholder={props.placeholder} />
    </div>
  );
}

export default InputBox;