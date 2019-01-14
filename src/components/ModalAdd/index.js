import React from "react";
import "./ModalAdd.css";
import PropTypes from "prop-types";

const ModalAdd = ({ show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">{children}</section>
    </div>
  );
};

ModalAdd.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default ModalAdd;
