import { Button, Modal, Form, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../app/crudSlice";

const AddModall = (prop) => {

  const dispatch = useDispatch();
  const { tasks } = useSelector((store) => store.crudReducer);
  // const [isFormEmpty,setIsFormEmpty] = useState(false)
  
  
  const [formState, setFormState] = useState({});
  
  useEffect(()=>{
    const stateValue = prop.editTask
    ? prop.editTask
    : {
      id: Date.now().toString(),
      title: "",
      author: "",
      assigned_to: "",
      end_date: "",
    };
    setFormState(stateValue)

  },[prop.show])

  const handleSave = () => {
    if (prop.editTask) {
      // editTask doluysa, görev güncelleme işlemini yapar
      dispatch(updateTask({ id: prop.editTask.id, updatedTask: formState }));
    } else {
      // editTask boşsa, yeni bir görev ekler
      dispatch(addTask(formState));
    }
    //modal kapat
    prop.handleClose();
  };
  return (
    <>
      <Modal show={prop.show} onHide={prop.handleClose}>
        <Modal.Header closeButton className=" bg-dark">
          <Modal.Title className=" text-light"> {prop.editTask? "Görevi Düzenle" : "Yeni Ekle"}</Modal.Title>
        </Modal.Header>
        <Modal.Body className=" bg-dark">
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className=" bg-dark text-light">Baslik</Form.Label>
              <Form.Control
                className=" bg-dark text-light "
                onChange={(e) =>
                  setFormState({ ...formState, title: e.target.value })
                }
                type="text"
                placeholder="konu basligi giriniz"
                value={formState.title}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className=" bg-dark text-light">yazar</Form.Label>
              <Form.Control
                className=" bg-dark text-light"
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    [e.target.name]: e.target.value,
                  })
                }
                name="author"
                type="text"
                placeholder="yazar seciniz"
                value={formState.author}

              />
            </Form.Group>
            <Form.Group className="mb-3 text-light" controlId="formGroupEmail">
              <Form.Label className=" bg-dark text-light">
                Atanacak Kisi
              </Form.Label>
              <Form.Control
                className=" bg-dark text-light"
                onChange={(e) =>
                  setFormState({ ...formState, assigned_to: e.target.value })
                }
                type="text"
                value={formState.assigned_to}

              />
              <Form.Text>Görev atanacak kisiyi giriniz </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className=" bg-dark text-light">
                Teslim Tarihi
              </Form.Label>
              <Form.Control
                className=" bg-dark text-light"
                onChange={(e) =>
                  setFormState({ ...formState, end_date: e.target.value })
                }
                type="date"
                value={formState.end_date}

              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className=" bg-dark text-light">
          <Button
            className=" bg-dark border"
            variant="dark"
            onClick={handleSave}
          >
            <Spinner
              variant="success"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            KAYDET
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddModall;
