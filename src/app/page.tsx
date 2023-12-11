"use client";
import { useState } from "react";
import { api } from "../../services/api";

const initialItens = [
  { id: 1, nome: "Banana" },
  { id: 2, nome: "Uva" },
];

export default function Home() {
<<<<<<< HEAD
  const [textInput, setTexInput] = useState("")
=======
  const [textInput, setTextInput] = useState("");
>>>>>>> d52123749d45bea40b7c9be97be6d450358dddc6
  const [itens, setItens] = useState(initialItens);

  async function handleClick() {
    const response = await api.get("/produtos");
    console.log(response);
    setItens(response.data);
<<<<<<< HEAD
    
    //const response = await fetch("http://192.168.68.154:3000/produtos");
    //const produtos = await response.json();
    //setItens(produtos);
    //console.log(produtos);
  }

 async function handleAddItem(){
    console.log(textInput);
    const data = { nome: textInput};
=======

    // const response = await fetch("http://192.168.68.154:3000/produtos");
    // const produtos = await response.json();
    // console.log(produtos);
  }

  async function handleAddItem() {
    // console.log(textInput);
    const data = { nome: textInput };
>>>>>>> d52123749d45bea40b7c9be97be6d450358dddc6

    try {
      const response = await fetch("http://192.168.68.154:3000/produtos", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
<<<<<<< HEAD
  
=======

>>>>>>> d52123749d45bea40b7c9be97be6d450358dddc6
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
<<<<<<< HEAD
      alert ("Ocorreu um erro");
=======
      alert("Ocorreu um erro");
>>>>>>> d52123749d45bea40b7c9be97be6d450358dddc6
    }
  }

  return (
    <main>
<<<<<<< HEAD

      <div>
        <input onChange={(e) => setTexInput(e.target.value)} placeholder="digite aq" />
        <button onClick={handleAddItem}>enviar</button>
      </div>


=======
      <div style={{ marginBottom: 10 }}>
        <input
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Digite o seu texto aqui..."
        />
        <button onClick={handleAddItem}>Enviar</button>
      </div>

>>>>>>> d52123749d45bea40b7c9be97be6d450358dddc6
      <button onClick={handleClick}>Buscar informação no servidor</button>

      <ul>
        {itens.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </main>
  );
}
