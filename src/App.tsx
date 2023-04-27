import { useState } from "react";
import "./App.css";
import Card from "./components/card/card";
import CreateModal from "./components/modals/create-modal";
import { useFoodData } from "./hooks/useFoodData";
import DeleteModal from "./components/modals/delete-modal";

function App() {
  const { data } = useFoodData();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  function openCreateModal() {
    setIsCreateModalOpen(true);
  }

  function openDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map((foodData) => (
          <Card
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
          />
        ))}
      </div>
      <div>
        {isCreateModalOpen && <CreateModal />}
        <button onClick={openCreateModal} className="btn-post">
          Cadastrar
        </button>
      </div>
      <div>
        {isDeleteModalOpen && <DeleteModal />}
        <button onClick={openDeleteModal}>Apagar</button>
      </div>
    </div>
  );
}

export default App;
