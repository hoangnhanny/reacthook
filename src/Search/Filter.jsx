import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

Filter.propTypes = {
  onSubmit: PropTypes.func,
};
Filter.defaultProps = {
  onSubmit: null,
};

function Filter(props) {
  const { onSubmit } = props;
  const [searchItem, setSearchItem] = useState("");
  const typingTimeoutRef = useRef(null);
  function handleSearchChange(e) {
    setSearchItem(e.target.value);
    if (!onSubmit) return;
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        searchItem: e.target.value,
      };
      onSubmit(formValue);
    }, 400);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={handleSearchChange}
          value={searchItem}
        ></input>
      </form>
    </div>
  );
}

export default Filter;
