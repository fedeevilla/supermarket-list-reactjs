import React from "react";
import PropTypes from "prop-types";
import "./ListItem.css";
import deleteIcon from "../../assets/deleteIcon.png";

const ListItem = ({ item, handleRemove }) => {
  return (
    <div className="item">
      <div className="name">{item.name}</div>
      <div className="deleteSpan">
        <img
          className="delete"
          src={deleteIcon}
          alt="delete"
          onClick={() => {
            if (window.confirm("Are you sure you wish to delete this item?"))
              handleRemove(item.id);
          }}
        />
      </div>
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default ListItem;
