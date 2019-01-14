import React from "react";
import PropTypes from "prop-types";
import "./CountItems.css";

const CountItems = ({ items }) => {
  return (
    <div className="text">
      {items.length === 0 ? (
        <h4>List is empty</h4>
      ) : (
        <h4>{items.length} ITEMS</h4>
      )}
    </div>
  );
};

CountItems.propTypes = {
  items: PropTypes.array.isRequired
};

export default CountItems;
