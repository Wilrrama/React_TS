import { Dispatch, useState } from "react";
import { IUser } from "../App";

interface IListProps {
  users: IUser[];
  setUsers: Dispatch<React.SetStateAction<IUser[]>>;
}

export const List = ({ users, setUsers }: IListProps) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedName, setEditedName] = useState<string>("");
  const [editedDocument, setEditedDocument] = useState<number>();
  const [editedSelected, setEditedSelected] = useState<string>("");

  const handleRemoveUser = (index: number) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleEditUser = (index: number) => {
    setEditingIndex(index);
    setEditedName(users[index].name);
    setEditedDocument(users[index].document);
    setEditedSelected(users[index].selected);
  };

  const handleSaveEdit = () => {
    if (editingIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = {
        name: editedName,
        document: editedDocument || 0,
        selected: editedSelected,
      };
      setUsers(updatedUsers);
      setEditingIndex(null);
    }
  };

  return (
    <ol>
      {users.map((user, index) => (
        <li key={index}>
          {index === editingIndex ? (
            <div>
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              <input
                type="number"
                value={editedDocument}
                onChange={(e) =>
                  setEditedDocument(parseInt(e.target.value, 10))
                }
              />
              <select
                value={editedSelected}
                onChange={(e) => setEditedSelected(e.target.value)}
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
              <button onClick={handleSaveEdit}>Salvar</button>
            </div>
          ) : (
            <>
              {user.name} -- CPF/RG: {user.document} ---{" "}
              {index === editingIndex ? (
                <span>{editedSelected}</span>
              ) : (
                <span>{user.selected}</span>
              )}
              <button onClick={() => handleEditUser(index)}>Editar</button>
              <button onClick={() => handleRemoveUser(index)}>Remover</button>
            </>
          )}
        </li>
      ))}
    </ol>
  );
};
