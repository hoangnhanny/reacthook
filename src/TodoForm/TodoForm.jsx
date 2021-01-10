import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleOnChange(event) {
    setValue(event.target.value);
  }
  function handleOnSubmit(event) {
    event.preventDefault();

    if (!onSubmit) return;

    const formValue = {
      title: value,
    };

    onSubmit(formValue);

    setValue("");
    console.log(value);
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" onChange={handleOnChange} value={value}></input>
    </form>
  );
}

export default TodoForm;
