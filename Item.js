import React from 'react'

function Item({item, onDeleteItem, onToggleItem}) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
      <span style={item.packed? {textDecoration: "line-through"}:{}}>
        ${item.quantity} {item.description}
      </span>
      <button style={{color: "#ff0000", fontSize: "2.4rem"}} onClick={() => {onDeleteItem(item.id)}}>&times;</button>
    </li>
  )
}

export default Item
