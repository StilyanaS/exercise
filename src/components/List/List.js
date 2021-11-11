import React, { useState } from "react";
import Item from "../Item/Item";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import data from "../data";

const List = ({filteredArray}) => {
  console.log(`Esto es ${filteredArray}`);
  //Deifnir nuevo producto
  const newProduct = {
    id: 6,
    name: "Babolat New Drive",
    description:
      "Desde hace más de 20 años, la Pure Drive 300 g, modelo emblemático de la marca francesa Babolat, es LA raqueta reconocida por su perfecta combinación entre control y potencia. Su color azul, negro y blanco de esta Pure Drive es elegante y moderna. Dos tecnologías mejoran a este modelo: el FSI Power y el Cortex Pure Feel que aportan aún más de sensaciones y potencia en el golpe. ",
    image:
      "https://www.tennis-point.es/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw25dfe9d4/images/009/051/02743000_000.jpg?q=80&sw=640",
    price: 289,
  };


  // crear estado para la lista de productos
  const [listItems, setListItems] = useState(data);


  // Borrar un item
   function deleteItem(itemId) {
    let newDataArray = listItems.filter((item) => itemId !== item.id)
    setListItems([...newDataArray]);
   }

  // Añadir producto a la lista 
  const addNewProduct = () => {
    console.log(listItems);
    const addedNewItem = [newProduct, ...listItems];
    setListItems(addedNewItem);
  };

  return (
    <>
      <Button variant="outline-dark" className ="w-20" onClick={addNewProduct}>Add new product</Button>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listItems.map((item) => (
            <tr key={item.id}>
              <Item 
              item={item}
              deleteItem={deleteItem}
              />
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default List;
