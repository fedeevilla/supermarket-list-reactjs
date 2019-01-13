import React, { Fragment } from "react";
import PropTypes from "prop-types";

const CountItems = ({ items }) => {
  return (
    <Fragment>
      <h4>{items.length} ITEMS</h4>
    </Fragment>
  );
};

CountItems.propTypes = {
  items: PropTypes.array.isRequired
};

export default CountItems;
