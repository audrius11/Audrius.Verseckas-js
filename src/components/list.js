import React from "react";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

function ListHome(props) {
    let {  category, title, img, description,  deleteItem, edit, id, } =
        props;
    return(
   <div className="procedure-list">
    
  <div className="img">{img}</div>
  <div className="details">
  <div className="name">{title}</div>
  <div className="category">{category}</div>
  <div className="description">{description}</div>
  </div>
    <div className="actions">
   <div className="edit">
    <button  onClick={() => edit(id)}> <FiEdit /></button>
   </div>
   <div className="delete">
   <button onClick={() => deleteItem(id)}> <BsTrash /></button>
   </div>
   </div>
   </div>



    );

}
export default ListHome;