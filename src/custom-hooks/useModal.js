import { useState } from "react";
import propTypes from "prop-types";

const useModal = () => {
  const [modal, setModal] = useState(false);

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleOpenModal = () => {
    setModal(true);
  };

  return { modal, handleCloseModal, handleOpenModal };
};

export default useModal;

// DOCUMENTACIÓN PROP-TYPE
useModal.propTypes = {
  modal: propTypes.bool,
};