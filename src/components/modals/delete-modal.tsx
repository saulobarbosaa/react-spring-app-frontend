import { useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataDelete";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input type="number" onChange={(e) => updateValue(e.target.value)} />
    </>
  );
};

export function DeleteModal() {
  const [id, setId] = useState(0);
  const [, setIsModalOpen] = useState(false);
  const { mutate } = useFoodDataMutate();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteSubmit = (id: number) => {
    mutate(id);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Apague um item do cardápio</h2>

        <form action="" className="input-container">
          <Input label="Id do alimento" value={id} updateValue={setId} />
          <button onClick={() => deleteSubmit(id)} className="btn-secondary">
            Deletar
          </button>
          <button onClick={closeModal} className="btn-secondary">
            Fechar
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeleteModal;
