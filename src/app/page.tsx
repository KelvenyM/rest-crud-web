"use client";
import { useState } from "react";
import { api } from "../../services/api";

const initialItens = [
  { id: 1, nome: "Banana" },
  { id: 2, nome: "Uva" },
];

export default function Home() {
  const [textInput, setTexInput] = useState("")
  const [itens, setItens] = useState(initialItens);

  async function handleClick() {
    const response = await api.get("/produtos");
    console.log(response);
    setItens(response.data);
    
    //const response = await fetch("http://192.168.68.154:3000/produtos");
    //const produtos = await response.json();
    //setItens(produtos);
    //console.log(produtos);
  }

 async function handleAddItem(){
    console.log(textInput);
    const data = { nome: textInput};

    try {
      const response = await fetch("http://192.168.68.154:3000/produtos", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
      alert ("Ocorreu um erro");
    }
  }

  return (
    <main>

      <div>
        <input onChange={(e) => setTexInput(e.target.value)} placeholder="digite aq" />
        <button onClick={handleAddItem}>enviar</button>
      </div>


      <button onClick={handleClick}>Buscar informação no servidor</button>

      <ul>
        {itens.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </main>
  );
}
