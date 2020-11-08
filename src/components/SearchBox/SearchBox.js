import React, { useState } from "react";

import './SearchBox.scss'

const SearchBox = ({ text, buttonText, handleSubmit }) => {
  const [inputText, setInputText] = useState('')
  const onChange = (e) => setInputText(e.target.value)
  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(inputText)
  }

  return (
    <form className="searchbox__base" onSubmit={onSubmit}>
      <input
        className="searchbox__input"
        placeholder={text}
        type="text"
        value={inputText}
        onChange={onChange}/>
      <button className="button searchbox__button">{buttonText}</button>
    </form>
  );
};

export default SearchBox;