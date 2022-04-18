import React, { useState , useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


// console.log(allCategory)

function App() {
  const allCategory = ['all', ...new Set(items.map((e)=>{
    return e.category
  }))
  ]


  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategory)

  useEffect(() => {
    
  })
  
  const filterItems =(filterCategory)=>{
    if(filterCategory === 'all'){
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((e)=>{
     return e.category === filterCategory
    })
    setMenuItems(newItems)
  }

 
  return <>
  <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} categories={categories} />
      <Menu items={menuItems}  />
    </section>
  </main>
  </>;
}

export default App;
