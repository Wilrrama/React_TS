import { useState } from "react";
import "./App.css";
import { Register } from "./components/Register";
import { List } from "./components/List";

export interface IUser {
  name: string;
  document: number;
  selected: string;
}

export const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  return (
    <>
      <h1>Demo Aula Terça</h1>
      <h2>Tipando componentes e estados</h2>
      <Register setUsers={setUsers} />
      <List users={users} setUsers={setUsers} />
    </>
  );
};
