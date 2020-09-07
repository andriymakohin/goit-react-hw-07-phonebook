import React from "react";
import PropTypes from "prop-types";
import { InputFilter, Label, Form } from "./Filter.styles";
const Filter = ({ showFilter, filter, onChange }) => (
  <>
  <Form in={showFilter}>
    <Label>Find contacts by name
    <InputFilter
    onChange={(e) => onChange(e.target.value)}
    value={filter}
    type="text"
  /></Label>
  </Form>
  
  
  </>
);

Filter.propTypes = {
  showFilter: PropTypes.bool,
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
