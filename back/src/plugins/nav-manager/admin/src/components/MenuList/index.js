import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Td, Th, IconButton } from "@strapi/design-system";
import { Pencil, Trash } from "@strapi/icons";
import axios from "axios";

const MenuList = ({ onEdit, onDelete }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get("/nav-manager/menus", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setMenuItems(response.data.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des menus :", error);
        setError("Impossible de charger les menus.");
      }
    };

    fetchMenus();
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <Table colCount={2} footer={undefined}>
      <Thead>
        <Tr>
          <Th>Nom du menu</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {menuItems.length === 0 ? (
          <Tr>
            <Td colSpan={2} style={{ textAlign: "center" }}>
              Aucun menu trouvé.
            </Td>
          </Tr>
        ) : (
          menuItems.map((menu) => (
            <Tr key={menu.id}>
              <Td>{menu.name}</Td>
              <Td>
                <IconButton
                  label="Modifier"
                  icon={<Pencil />}
                  onClick={() => onEdit(menu)}
                />
                <IconButton
                  label="Supprimer"
                  icon={<Trash />}
                  onClick={() => onDelete(menu.id)}
                />
              </Td>
            </Tr>
          ))
        )}
      </Tbody>
    </Table>
  );
};

export default MenuList;