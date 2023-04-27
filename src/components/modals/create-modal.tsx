import { useState } from "react";
import { useFoodData } from "../../hooks/useFoodData";
import { FoodData } from "../../interface/FoodData";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import "./modal.css";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input type="text" onChange={(e) => updateValue(e.target.value)} />
    </>
  );
};

export function CreateModal() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(0);
  const [price, setPrice] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { mutate } = useFoodDataMutate();

  const submit = () => {
    const foodData: FoodData = {
      title,
      image: image.toString(),
      price: parseFloat(price),
    };

    mutate(foodData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre um novo item no cardápio</h2>

        <form action="" className="input-container">
          <Input label="Título" value={title} updateValue={setTitle} />
          <Input label="Link da imagem" value={image} updateValue={setImage} />
          <Input label="Preço" value={price} updateValue={setPrice} />
          <button onClick={submit} className="btn-secondary">
            Postar
          </button>
          <button onClick={closeModal} className="btn-secondary">
            Fechar
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateModal;
