"use client";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Product {
  id: number;
  nome: string;
}

export default function Home() {
  const [loading, setLoading]  = useState(false)
  const [textInput, setTexInput] = useState("")
  const [items, setItems] = useState<Product[]>([]);
  
  useEffect(() => {
    loadItems();
},[]);

useEffect(() => {
  console.log("O código está passando por aqui");
},[textInput])


  async function loadItems() {
    setLoading(true);

      try {
        const response = await api.get("/produtos");
        console.log(response);
        setItems(response.data);
        console.log("sucess:", response);
      }catch (error) {
          console.log("Error:, error");
        }finally{
          setLoading(false);
        }
    }

 async function handleAddItem(){
    console.log(textInput);
    const data = { nome: textInput};

    try {
      const response = await api.post('/produtos', data);
      loadItems();
      console.log(response);
      
    } catch (error) {
      console.log("Errorrr:", error)
    } 

  }
function handleDeleteItem (itemId: number){
  console.log(itemId)
}
  return (
    <main>

      <div>
        <input onChange={(e) => setTexInput(e.target.value)} placeholder="digite aqui" />
        <button onClick={handleAddItem}>enviar</button>
      </div>

      <span>
        {loading && "Carregando..."}
      </span>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.nome}
          <button onClick = {() => handleDeleteItem(item.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
