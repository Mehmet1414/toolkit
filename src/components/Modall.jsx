import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

const AddModal = (prop) => {
  const [formState, setFormState] = useState({
    title: "",
    author: "",
    assigned_to: "",
    end_date: "",
  });

  const handleSave = () => {
    //Objeyi store aktar
    //modal kapat
    console.log(formState);
  };
  return (
    <>
      <Modal show={prop.show} onHide={prop.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Yeni Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Baslik</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormState({ ...formState, title: e.target.value })
                }
                type="text"
                placeholder="konu basligi giriniz"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>yazar</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormState({ ...formState, author: e.target.value })
                }
                type="text"
                placeholder="yazar seciniz"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Atanacak Kisi</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormState({ ...formState, assigned_to: e.target.value })
                }
                type="text"
              />
              <Form.Text>Görev atanacak kisiyi giriniz </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Teslim Tarihi</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormState({ ...formState, end_date: e.target.value })
                }
                type="date"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSave}>Kaydet</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddModal;
