import { Button, Table } from "react-bootstrap";
import AddModall from "../components/Modall";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../app/crudSlice";

const CrudPage = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const handleClose = () => {
    setEditTask(null);
    setShowModal(false);
  };
  const handleShow = () => setShowModal(true);

  const { tasks } = useSelector((store) => store.crudReducer);

  return (
    <>
      <AddModall
        show={showModal}
        handleClose={handleClose}
        editTask={editTask}
      />
      <Button className=" m-3" variant="success" onClick={() => handleShow()}>
        Görev Ekle
      </Button>
      <Table className=" m-3" bordered striped hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Görev</th>
            <th>Yazar</th>
            <th>Atanan Kisi</th>
            <th>Tarih</th>
            <th>islemler</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                {" "}
                <Button
                  onClick={() => dispatch(removeTask(index))}
                  variant="danger"
                >
                  Sil
                </Button>{" "}
                <Button
                  onClick={() => {
                    setEditTask(task);
                    setShowModal(true);
                  }}
                  variant="warning"
                >
                  Düzenle
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default CrudPage;
