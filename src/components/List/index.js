import React, { Fragment } from "react";
import ListItem from "./../ListItem";
import PropTypes from "prop-types";

const List = ({ items, handleRemove }) => {
  return (
    <Fragment>
      {items.map(item => {
        return (
          <ListItem key={item.id} item={item} handleRemove={handleRemove} />
        );
      })}
    </Fragment>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default List;
