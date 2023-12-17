import { Dispatch, FormEvent, useState } from "react";
import { IUser } from "../App";

interface IRegisterProps {
  setUsers: Dispatch<React.SetStateAction<IUser[]>>;
}
export function Register({ setUsers }: IRegisterProps) {
  const [name, setName] = useState("");
  const [doc, setDoc] = useState("");
  const [selected, setSelected] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setUsers((prevUsers) => [
      ...prevUsers,
      {
        name,
        document: +doc,
        selected,
      },
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <input type="number" onChange={(event) => setDoc(event.target.value)} />
      <select
        onChange={(event) => setSelected(event.target.value)}
        name="selected"
        id="selected"
      >
        <option value="" hidden>
          Função
        </option>
        <option value="Comissão">Comissão</option>
        <option value="Goleiro">Goleiro</option>
        <option value="Defensor">Defensor</option>
        <option value="Meio Campo">Meio Campo</option>
        <option value="Atacante">Atacante</option>
      </select>
      <button type="submit">Cadastrar</button>
    </form>
  );
}
