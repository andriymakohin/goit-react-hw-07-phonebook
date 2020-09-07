import React from "react";
import PropTypes from "prop-types";
import { Button, Name, Number } from "./ContactItem.styles";

const ContactItem = ({ name, number, onDelete }) => {
  const tel = `tel: ${number}`
  return (
    <>
      <Name>{name} :</Name>
      <Number href={tel}> {number}</Number>
      <Button onClick={onDelete}></Button>
    </>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};
export default ContactItem;