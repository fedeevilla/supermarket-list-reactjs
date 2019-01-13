import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ListItem = ({ item, handleRemove }) => {
  return (
    <Fragment>
      <h6>{item.name}</h6>
      <button onClick={() => handleRemove(item.id)}>Delete</button>
    </Fragment>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default ListItem;
