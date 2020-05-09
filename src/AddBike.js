import React from "react";
import PropTypes from "prop-types";

export const Addbike = ({ scholarno, charge, onChange, onSubmit }) => (
  <div className="row justify-content-center">
    <form className="form-inline" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="SCHOLAR NO"
        value={scholarno}
        name="scholarno"
        onChange={onChange}
      />

      <div className="input-group mb-2 mr-sm-2">
        <input
          type="text"
          className="form-control"
          placeholder="CHARGE"
          value={charge}
          name="charge"
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2 pxy-4">
        Save
      </button>
    </form>
  </div>
);

Addbike.propTypes = {
  scholarno: PropTypes.string.isRequired,
  charge: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
