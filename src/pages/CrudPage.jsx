import { Button } from "react-bootstrap";
import AddModal from "../components/Modall";
import { useState } from "react";

const CrudPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = ()=> setShowModal(true)

  return (
    <>
      <AddModal show={showModal} handleClose={handleClose} />
      <Button variant="success" onClick={() => handleShow()}>
        Ekle
      </Button>
    </>
  );
};

export default CrudPage;
