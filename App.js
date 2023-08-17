import Footer from './Components/Footer';
import Form from './Components/Form';
import Logo from './Components/Logo';
import PackingList from './Components/PackingList';
import './index.css';
import React, {useState} from 'react'


function App() {
  const [items, setItems]=useState([])

  const handleAddItem=(item) => {
    setItems(items => [...items, item])
  }

  const handleDeleteItem=(id) => {
    setItems(items => items.filter(item => item.id!==id))
  }

  const handleToggleItem=(id) => {
    setItems(items => items.map(item => item.id===id? {...item, packed: !item.packed}:item))
  }

  const handleClearlist=() => {

    const confirmed=window.confirm('Are you sure you want to delete all items?')

    if (confirmed) setItems([])
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearlist} />
      <Footer items={items} />
    </div>
  );
}

export default App;
